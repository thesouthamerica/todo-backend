const supabase = require('../config/supabaseClient');

// 1. Listar todas (READ)
exports.getAllTasks = async (req, res) => {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
};

// 2. Criar tarefa (CREATE)
exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    
    // Validação simples
    if (!title) return res.status(400).json({ error: 'O título é obrigatório.' });

    const { data, error } = await supabase
        .from('tasks')
        .insert([{ title, description }])
        .select(); // Retorna o item criado

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
};

// 3. Buscar por ID (READ One)
exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('tasks').select('*').eq('id', id).single();

    if (error) return res.status(404).json({ error: 'Tarefa não encontrada.' });
    res.status(200).json(data);
};

// 4. Atualizar tarefa (UPDATE)
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const { data, error } = await supabase
        .from('tasks')
        .update({ title, description, completed })
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada para atualizar.' });
    
    res.status(200).json(data[0]);
};

// 5. Deletar tarefa (DELETE)
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('tasks').delete().eq('id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(204).send(); // 204 No Content
};