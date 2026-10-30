/* ==========================================================================
   js/config/supabase.js — Inicialización del Cliente Supabase BaaS
   Estándar Operativo V2.6 — Frontend MVC
   Compatible tanto con ES Modules como con carga directa en navegador (file://)
   ========================================================================== */

const SUPABASE_CONFIG = {
    url: (typeof process !== 'undefined' && process.env?.SUPABASE_URL) || 'https://mock-instance.supabase.co',
    anonKey: (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY) || 'mock-anon-key'
};

const supabase = {
    isConfigured() {
        return SUPABASE_CONFIG.url !== 'https://mock-instance.supabase.co';
    },

    from(tableName) {
        return {
            async select() {
                return { data: null, error: null };
            },
            async insert(payload) {
                return { data: payload, error: null };
            },
            async update(payload) {
                return { data: payload, error: null };
            },
            async delete() {
                return { data: true, error: null };
            }
        };
    }
};

// Exposición global para compatibilidad con file:// y servidores web
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.supabase = supabase;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPABASE_CONFIG, supabase };
}
