// ========================================
// FUNCIONES DE ANALYTICS Y ESTADÍSTICAS
// Para dashboard (futuro)
// ========================================

/**
 * Obtener todas las respuestas del quiz
 */
async function getAllQuizResponses() {
  try {
    const supabase = await initSupabase();
    const { data, error } = await supabase
      .from('quiz_responses')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    console.log('📊 Total respuestas:', data.length);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Obtener fragancias más recomendadas
 */
async function getTopFragancias(limit = 5) {
  try {
    const supabase = await initSupabase();
    const { data, error } = await supabase
      .from('quiz_responses')
      .select('recommended_fragrance, count(*)')
      .groupBy('recommended_fragrance')
      .order('count', { ascending: false })
      .limit(limit);
    
    if (error) throw error;
    
    console.log('🏆 Top fragancias:', data);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Obtener estadísticas por emoción primaria
 */
async function getEmotionStats() {
  try {
    const supabase = await initSupabase();
    const { data, error } = await supabase
      .rpc('stats_emociones');
    
    if (error) throw error;
    
    console.log('😊 Emociones:', data);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Obtener estadísticas por tipo de aroma
 */
async function getAromaStats() {
  try {
    const supabase = await initSupabase();
    const { data, error } = await supabase
      .rpc('stats_aromas');
    
    if (error) throw error;
    
    console.log('🌸 Aromas:', data);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Obtener respuestas de últimos N días
 */
async function getRecentResponses(days = 7) {
  try {
    const supabase = await initSupabase();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const { data, error } = await supabase
      .from('quiz_responses')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    console.log(`📅 Respuestas últimos ${days} días:`, data.length);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Búsqueda por email
 */
async function findResponseByEmail(email) {
  try {
    const supabase = await initSupabase();
    const { data, error } = await supabase
      .from('quiz_responses')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    console.log(`📧 Respuestas para ${email}:`, data);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Búsqueda por fragancia recomendada
 */
async function getResponsesByFragrance(fragrance) {
  try {
    const supabase = await initSupabase();
    const { data, error } = await supabase
      .from('quiz_responses')
      .select('*')
      .eq('recommended_fragrance', fragrance)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    console.log(`🌸 Usuarios recomendados ${fragrance}:`, data.length);
    return data;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return [];
  }
}

/**
 * Obtener distribución de preferencias (todos los campos del quiz)
 */
async function getFullStats() {
  try {
    const allResponses = await getAllQuizResponses();
    
    const stats = {
      total_responses: allResponses.length,
      emotions_primary: {},
      emotions_secondary: {},
      aroma_types: {},
      uses: {},
      temporal_prefs: {},
      top_fragrances: {}
    };

    allResponses.forEach(response => {
      const answers = response.answers || {};
      
      // Emociones primarias
      const emo1 = answers.emo_feeling;
      if (emo1) stats.emotions_primary[emo1] = (stats.emotions_primary[emo1] || 0) + 1;
      
      // Emociones secundarias
      const emo2 = answers.emo_mood;
      if (emo2) stats.emotions_secondary[emo2] = (stats.emotions_secondary[emo2] || 0) + 1;
      
      // Tipos de aroma
      const aroma = answers.aroma_type;
      if (aroma) stats.aroma_types[aroma] = (stats.aroma_types[aroma] || 0) + 1;
      
      // Usos
      const uso = answers.uso_principal;
      if (uso) stats.uses[uso] = (stats.uses[uso] || 0) + 1;
      
      // Preferencias temporales
      const temporal = answers.preferencia_temporal;
      if (temporal) stats.temporal_prefs[temporal] = (stats.temporal_prefs[temporal] || 0) + 1;
      
      // Fragancias recomendadas
      const frag = response.recommended_fragrance;
      if (frag) stats.top_fragrances[frag] = (stats.top_fragrances[frag] || 0) + 1;
    });

    console.log('📊 ESTADÍSTICAS COMPLETAS:', stats);
    return stats;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return null;
  }
}

/**
 * Exportar datos a CSV (para Excel)
 */
async function exportToCSV() {
  try {
    const responses = await getAllQuizResponses();
    
    if (responses.length === 0) {
      console.warn('⚠️ No hay datos para exportar');
      return;
    }

    // Encabezados
    const headers = [
      'ID',
      'Email',
      'Teléfono',
      'Emoción Principal',
      'Emoción Secundaria',
      'Tipo Aroma',
      'Uso Principal',
      'Preferencia Temporal',
      'Fragancia Recomendada',
      'Fecha',
      'IP'
    ];

    // Filas
    const rows = responses.map(r => {
      const answers = r.answers || {};
      return [
        r.id,
        r.email,
        r.phone,
        answers.emo_feeling || '',
        answers.emo_mood || '',
        answers.aroma_type || '',
        answers.uso_principal || '',
        answers.preferencia_temporal || '',
        r.recommended_fragrance,
        new Date(r.created_at).toLocaleString('es-AR'),
        r.ip_address || ''
      ];
    });

    // Convertir a CSV
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
      csv += row.map(cell => `"${cell}"`).join(',') + '\n';
    });

    // Descargar
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `quiz-responses-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('✅ Datos exportados a CSV');
  } catch (error) {
    console.error('❌ Error de exportación:', error.message);
  }
}

/**
 * Limpiar datos old (borrar respuestas con más de N meses)
 * ⚠️ USE WITH CAUTION
 */
async function cleanOldData(monthsOld = 12) {
  const confirmDelete = confirm(`¿Estás seguro? Esto borrará respuestas con más de ${monthsOld} meses.`);
  
  if (!confirmDelete) return;

  try {
    const supabase = await initSupabase();
    const cutoffDate = new Date();
    cutoffDate.setMonth(cutoffDate.getMonth() - monthsOld);

    const { data, error } = await supabase
      .from('quiz_responses')
      .delete()
      .lt('created_at', cutoffDate.toISOString());

    if (error) throw error;

    console.log('🗑️ Datos antiguos eliminados');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// ========================================
// USO EN CONSOLA DEL NAVEGADOR
// ========================================
/*
// Ver todas las respuestas
await getAllQuizResponses();

// Ver top 5 fragancias
await getTopFragancias(5);

// Ver estadísticas de emociones
await getEmotionStats();

// Ver estadísticas completas
await getFullStats();

// Buscar por email
await findResponseByEmail('user@example.com');

// Exportar a CSV
await exportToCSV();

// Ver solo últimos 7 días
await getRecentResponses(7);
*/
