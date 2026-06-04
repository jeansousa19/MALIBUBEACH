// config.js
const SUPABASE_URL = "https://bwndhlrqoxqaccnsaaxl.supabase.co"; // Substitua pelo seu real
const SUPABASE_ANON_KEY = "sb_publishable_itnrVLAAq5e89U2cJNkoSw_jpaVALWr";         // Substitua pelo seu real

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função global para garantir que o usuário está logado antes de carregar a página
function verificarSessao() {
    const sessaoRaw = localStorage.getItem('arena_session');
    if (!sessaoRaw) {
        window.location.href = 'index.html';
        return null;
    }
    const sessao = JSON.parse(sessaoRaw);
    // Verifica se a sessão expirou (opcional, simplificado aqui)
    return sessao;
}