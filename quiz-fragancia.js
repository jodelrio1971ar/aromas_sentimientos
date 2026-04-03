// ========================================
// QUIZ INTERACTIVO - ENCUENTRA TU FRAGANCIA
// ========================================

const FRAGANCIAS_DATA = [
  {
    id: 1,
    nombre: 'Magnolia',
    perfil: 'Fresca con notas dulces',
    categoria: 'Floral · Delicada',
    desc: 'Evoca la pureza y la calma del jardín primaveral.',
    propiedades: {
      emocional: ['Calma', 'Serenidad', 'Pureza'],
      tipo_aroma: ['Floral', 'Fresco', 'Dulce'],
      uso: ['Ropa', 'Persona', 'Casa']
    },
    puntuaciones: { calma: 9, energia: 3, seduccion: 2, bienestar: 8, frescor: 7 }
  },
  {
    id: 2,
    nombre: 'Gardenias',
    perfil: 'Fresca, intensa y atractiva',
    categoria: 'Floral · Intensa',
    desc: 'Un aroma que cautiva y energiza el ambiente.',
    propiedades: {
      emocional: ['Energía', 'Atracción', 'Vitalidad'],
      tipo_aroma: ['Floral', 'Intensa', 'Fresca'],
      uso: ['Ambiente', 'Persona']
    },
    puntuaciones: { calma: 4, energia: 8, seduccion: 7, bienestar: 6, frescor: 8 }
  },
  {
    id: 3,
    nombre: 'Bullbridge',
    perfil: 'Sofisticada, cálida, fresca y cítrica',
    categoria: 'Cítrica · Sofisticada',
    desc: 'Una fragancia compleja que identifica a la persona por su perfume.',
    propiedades: {
      emocional: ['Elegancia', 'Confianza', 'Sofisticación'],
      tipo_aroma: ['Cítrica', 'Cálida', 'Compleja'],
      uso: ['Firma', 'Persona']
    },
    puntuaciones: { calma: 6, energia: 7, seduccion: 8, bienestar: 7, frescor: 8 }
  },
  {
    id: 4,
    nombre: 'Sandía y Pepino',
    perfil: 'Revitalizante y fresca',
    categoria: 'Acuática · Revitalizante',
    desc: 'Ideal para momentos de fatiga. Aporta frescura acuática que despierta los sentidos.',
    propiedades: {
      emocional: ['Revitalización', 'Energía', 'Claridad'],
      tipo_aroma: ['Acuática', 'Fresca', 'Tropical'],
      uso: ['Auto', 'Oficina']
    },
    puntuaciones: { calma: 3, energia: 9, seduccion: 2, bienestar: 7, frescor: 10 }
  },
  {
    id: 5,
    nombre: 'Softy',
    perfil: 'Suave, fresca, limpia y reconfortante',
    categoria: 'Suave · Hogareña',
    desc: 'Transmite la sensación de sábanas limpias y un hogar acogedor.',
    propiedades: {
      emocional: ['Confort', 'Hogar', 'Paz'],
      tipo_aroma: ['Suave', 'Fresca', 'Limpia'],
      uso: ['Ropa de cama', 'Casa']
    },
    puntuaciones: { calma: 8, energia: 2, seduccion: 1, bienestar: 9, frescor: 7 }
  },
  {
    id: 6,
    nombre: 'Almendra y Fresia',
    perfil: 'Dulce y floral con calidez',
    categoria: 'Dulce · Floral',
    desc: 'Brinda calidez y una sensación de abrazo constante.',
    propiedades: {
      emocional: ['Calidez', 'Ternura', 'Afecto'],
      tipo_aroma: ['Dulce', 'Floral', 'Cálida'],
      uso: ['Persona', 'Ropa']
    },
    puntuaciones: { calma: 7, energia: 3, seduccion: 6, bienestar: 9, frescor: 4 }
  },
  {
    id: 7,
    nombre: 'Miel de Hadas',
    perfil: 'Dulce y mágica',
    categoria: 'Dulce · Etérea',
    desc: 'Un aroma etéreo que invita a soñar y a la alegría.',
    propiedades: {
      emocional: ['Alegría', 'Magia', 'Sueño'],
      tipo_aroma: ['Dulce', 'Etérea', 'Juguetona'],
      uso: ['Niños', 'Ambiente']
    },
    puntuaciones: { calma: 6, energia: 4, seduccion: 2, bienestar: 8, frescor: 3 }
  },
  {
    id: 8,
    nombre: 'Limón y Jengibre',
    perfil: 'Cítrica y picante',
    categoria: 'Cítrica · Energizante',
    desc: 'Energizante natural que ayuda a enfocar la mente.',
    propiedades: {
      emocional: ['Concentración', 'Energía', 'Claridad'],
      tipo_aroma: ['Cítrica', 'Picante', 'Estimulante'],
      uso: ['Oficina', 'Estudio']
    },
    puntuaciones: { calma: 2, energia: 10, seduccion: 1, bienestar: 6, frescor: 9 }
  },
  {
    id: 9,
    nombre: 'Coco y Melón',
    perfil: 'Tropical y alegre',
    categoria: 'Tropical · Alegre',
    desc: 'Transporta a lugares soñados de playa y sol.',
    propiedades: {
      emocional: ['Diversión', 'Verano', 'Escapismo'],
      tipo_aroma: ['Tropical', 'Alegre', 'Frutal'],
      uso: ['Verano', 'Auto', 'Casa']
    },
    puntuaciones: { calma: 4, energia: 7, seduccion: 3, bienestar: 8, frescor: 8 }
  },
  {
    id: 10,
    nombre: 'Té Verde',
    perfil: 'Herbal y fresco',
    categoria: 'Herbal · Meditativa',
    desc: 'Ayuda a la meditación y a la limpieza energética.',
    propiedades: {
      emocional: ['Meditación', 'Paz', 'Equilibrio'],
      tipo_aroma: ['Herbal', 'Fresco', 'Puro'],
      uso: ['Meditación', 'Yoga']
    },
    puntuaciones: { calma: 9, energia: 2, seduccion: 1, bienestar: 9, frescor: 6 }
  },
  {
    id: 11,
    nombre: 'Bambú',
    perfil: 'Zen y natural',
    categoria: 'Natural · Zen',
    desc: 'Una fragancia pura que conecta con lo esencial de la vida.',
    propiedades: {
      emocional: ['Minimalismo', 'Zen', 'Esencia'],
      tipo_aroma: ['Natural', 'Pura', 'Fresca'],
      uso: ['Spa', 'Minimalista']
    },
    puntuaciones: { calma: 10, energia: 1, seduccion: 1, bienestar: 9, frescor: 5 }
  },
  {
    id: 12,
    nombre: 'Jazmín',
    perfil: 'Floral intenso y seductor',
    categoria: 'Floral · Intensa',
    desc: 'Seductor y calmante al mismo tiempo.',
    propiedades: {
      emocional: ['Seducción', 'Sensualidad', 'Misterio'],
      tipo_aroma: ['Floral', 'Intensa', 'Sensual'],
      uso: ['Noche', 'Persona']
    },
    puntuaciones: { calma: 6, energia: 3, seduccion: 10, bienestar: 7, frescor: 3 }
  },
  {
    id: 13,
    nombre: 'Cristóbal',
    perfil: 'Fresco, limpio y seguro',
    categoria: 'Masculina · Fresca',
    desc: 'Una opción masculina que proyecta seguridad y paz envidiable.',
    propiedades: {
      emocional: ['Seguridad', 'Confianza', 'Pureza'],
      tipo_aroma: ['Fresca', 'Limpia', 'Cítrica'],
      uso: ['Hombre', 'Persona']
    },
    puntuaciones: { calma: 7, energia: 6, seduccion: 5, bienestar: 8, frescor: 8 }
  }
];

// ========================================
// CLASE QUIZ
// ========================================
class QuizFragancia {
  constructor() {
    this.respuestas = {
      emo_feeling: null,
      emo_mood: null,
      aroma_type: null,
      uso_principal: null,
      preferencia_temporal: null
    };
    this.puntuaciones = {};
    this.resultadoFinal = null;
  }

  calcularRecomendacion() {
    // Reiniciar puntuaciones
    this.puntuaciones = {};
    FRAGANCIAS_DATA.forEach(frag => {
      this.puntuaciones[frag.id] = 0;
    });

    // Mapeo de respuestas a puntuaciones
    const emocionMapping = {
      'calma': 'calma',
      'energia': 'energia',
      'seduccion': 'seduccion',
      'bienestar': 'bienestar'
    };

    const aromapMapping = {
      'floral': ['Magnolia', 'Gardenias', 'Almendra y Fresia', 'Jazmín'],
      'citrica': ['Bullbridge', 'Limón y Jengibre', 'Crystal'],
      'dulce': ['Almendra y Fresia', 'Miel de Hadas'],
      'fresca': ['Sandía y Pepino', 'Softy', 'Bambú', 'Cristóbal'],
      'herbal': ['Té Verde', 'Bambú'],
      'tropical': ['Coco y Melón']
    };

    // Sumar puntos basado en emociones
    const emocionPrimaria = this.respuestas.emo_feeling;
    const emocionSecundaria = this.respuestas.emo_mood;

    FRAGANCIAS_DATA.forEach(frag => {
      const puntuacion = frag.puntuaciones;
      
      // Aplicar puntos de emoción primaria
      if (emocionMapping[emocionPrimaria]) {
        this.puntuaciones[frag.id] += puntuacion[emocionMapping[emocionPrimaria]] * 2;
      }
      
      // Aplicar puntos de emoción secundaria (con menos peso)
      if (emocionMapping[emocionSecundaria]) {
        this.puntuaciones[frag.id] += puntuacion[emocionMapping[emocionSecundaria]] * 1.5;
      }
    });

    // Filtrar por tipo de aroma
    if (this.respuestas.aroma_type && aromapMapping[this.respuestas.aroma_type]) {
      const fraganciasPorAroma = aromapMapping[this.respuestas.aroma_type];
      FRAGANCIAS_DATA.forEach(frag => {
        if (!fraganciasPorAroma.includes(frag.nombre)) {
          this.puntuaciones[frag.id] *= 0.4; // Reducir puntuación
        } else {
          this.puntuaciones[frag.id] += 5; // Bonus
        }
      });
    }

    // Filtrar por uso principal
    if (this.respuestas.uso_principal) {
      FRAGANCIAS_DATA.forEach(frag => {
        if (frag.propiedades.uso.includes(this.respuestas.uso_principal)) {
          this.puntuaciones[frag.id] += 3;
        }
      });
    }

    // Encontrar la fragancia con mayor puntuación
    let mejorId = Object.keys(this.puntuaciones).reduce((a, b) => 
      this.puntuaciones[a] > this.puntuaciones[b] ? a : b
    );

    this.resultadoFinal = FRAGANCIAS_DATA.find(f => f.id == mejorId);
    return this.resultadoFinal;
  }

  obtenerRespuestas() {
    return this.respuestas;
  }

  obtenerResultado() {
    return this.resultadoFinal;
  }
}

// ========================================
// INSTANCIA GLOBAL DEL QUIZ
// ========================================
let quiz = new QuizFragancia();

// ========================================
// FUNCIONES DE INTERFAZ
// ========================================
function iniciarQuiz() {
  const quizSection = document.getElementById('quiz-container');
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('pregunta-1').style.display = 'block';
  }
}

function siguientePregunta(paso) {
  // Guardar respuesta
  const preguntas = document.querySelectorAll('[data-pregunta]');
  const preguntaActual = document.querySelector('[data-pregunta].visible');
  
  if (preguntaActual) {
    const respuestaSeleccionada = preguntaActual.querySelector('input[type="radio"]:checked');
    if (!respuestaSeleccionada) {
      alert('Por favor selecciona una respuesta antes de continuar.');
      return;
    }
  }

  // Hacer invisible actual y visible siguiente
  preguntas.forEach(p => p.classList.remove('visible'));
  document.getElementById(`pregunta-${paso}`).classList.add('visible');
}

function seleccionarRespuesta(pregunta, valor) {
  quiz.respuestas[pregunta] = valor;
  console.log(`Respuesta guardada: ${pregunta} = ${valor}`);
}

// ========================================
// VALIDACIONES DE FORMULARIO
// ========================================
function validarNombre(nombre) {
  if (!nombre || nombre.length === 0) {
    return { valido: false, error: '🔴 El nombre es obligatorio.' };
  }
  
  if (nombre.length < 2) {
    return { valido: false, error: '🔴 El nombre debe tener al menos 2 caracteres.' };
  }
  
  if (nombre.length > 50) {
    return { valido: false, error: '🔴 El nombre no puede exceder 50 caracteres.' };
  }
  
  // No permitir números
  if (/\d/.test(nombre)) {
    return { valido: false, error: '🔴 El nombre no puede contener números.' };
  }
  
  // No permitir caracteres especiales (excepto espacios, guiones, apóstrofes)
  if (!/^[a-záéíóúàèìòùäëïöüâêîôûãõñçA-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜÂÊÎÔÛÃÕÑÇ\s\-\']+$/.test(nombre)) {
    return { valido: false, error: '🔴 El nombre contiene caracteres inválidos.' };
  }
  
  return { valido: true };
}

function validarEmail(email) {
  if (!email || email.length === 0) {
    return { valido: false, error: '🔴 El email es obligatorio.' };
  }
  
  // Validación RFC 5322 (simplificada pero robusta)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valido: false, error: '🔴 Por favor ingresa un email válido (ej: usuario@ejemplo.com).' };
  }
  
  // Verificar que no tenga espacios
  if (/\s/.test(email)) {
    return { valido: false, error: '🔴 El email no puede contener espacios.' };
  }
  
  // Verificar dominios comunes (.com, .ar, .es, etc.)
  if (!/\.[a-z]{2,}$/i.test(email)) {
    return { valido: false, error: '🔴 El email debe terminar con un dominio válido (ej: .com, .ar).' };
  }
  
  return { valido: true };
}

function validarTelefono(telefono) {
  if (!telefono || telefono.length === 0) {
    return { valido: false, error: '🔴 El teléfono es obligatorio.' };
  }
  
  // Remover espacios y caracteres permitidos
  const telefonoLimpio = telefono.replace(/[\s\-\(\)]/g, '');
  
  // Debe tener solo números (y opcionalmente + al inicio)
  if (!/^\+?[0-9]{6,20}$/.test(telefonoLimpio)) {
    return { valido: false, error: '🔴 El teléfono debe contener al menos 6 dígitos.' };
  }
  
  return { valido: true };
}

function finalizarQuiz() {
  // Obtener y limpiar datos
  const nombre = document.getElementById('nombre-usuario').value?.trim();
  const email = document.getElementById('email-usuario').value?.trim().toLowerCase();
  const telefono = document.getElementById('telefono-usuario').value?.trim();

  // Validar nombre
  const validacionNombre = validarNombre(nombre);
  if (!validacionNombre.valido) {
    alert(validacionNombre.error);
    document.getElementById('nombre-usuario').focus();
    return;
  }

  // Validar email
  const validacionEmail = validarEmail(email);
  if (!validacionEmail.valido) {
    alert(validacionEmail.error);
    document.getElementById('email-usuario').focus();
    return;
  }

  // Validar teléfono
  const validacionTelefono = validarTelefono(telefono);
  if (!validacionTelefono.valido) {
    alert(validacionTelefono.error);
    document.getElementById('telefono-usuario').focus();
    return;
  }

  // ✅ Todas las validaciones pasaron
  // Calcular recomendación
  const recomendacion = quiz.calcularRecomendacion();

  // Mostrar resultado
  mostrarResultado(recomendacion, nombre, email, telefono);

  // Guardar en Supabase
  guardarQuizEnSupabase(nombre, email, telefono, quiz.obtenerRespuestas(), recomendacion);
}

function mostrarResultado(fragancia, nombre, email, telefono) {
  const resultadoDiv = document.getElementById('quiz-resultado');
  
  const htmlResultado = `
    <div class="resultado-card" style="text-align: center; animation: fadeUp 0.6s ease;">
      <p style="font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem;">Tu fragancia perfecta</p>
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 3rem; color: var(--white); margin-bottom: 0.5rem;">${fragancia.nombre}</h3>
      <p style="font-size: 0.9rem; color: var(--gold); font-style: italic; margin-bottom: 1.5rem;">${fragancia.perfil}</p>
      <p style="font-size: 0.85rem; color: var(--cream-dim); max-width: 50ch; line-height: 1.8; margin: 0 auto 2rem;">${fragancia.desc}</p>
      
      <div style="background: var(--surface); padding: 1.5rem; border-radius: 0.45rem; margin: 1.5rem 0; border: 1px solid rgba(201,169,110,0.15);">
        <p style="font-size: 0.75rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.8rem;">Información personalizada</p>
        <p style="font-size: 0.9rem; color: var(--cream); margin-bottom: 0.5rem;"><strong>¡Hola ${nombre}!</strong></p>
        <p style="font-size: 0.85rem; color: var(--cream-dim); margin-bottom: 1rem;">Hemos guardado tu perfil aromático. Te enviaremos detalles sobre ${fragancia.nombre} a: <strong>${email}</strong></p>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
        <a href="https://api.whatsapp.com/send?phone=5491158226606&text=Hola%20-%20estoy%20interesado%20en%20${fragancia.nombre}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.7rem; padding: 1rem 2rem; background: var(--gold); color: var(--bg); text-decoration: none; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; border-radius: 0.3rem; transition: all 0.3s;">💬 Consultar sobre ${fragancia.nombre}</a>
        <button onclick="reiniciarQuiz()" style="display: inline-flex; align-items: center; gap: 0.7rem; padding: 1rem 2rem; border: 1px solid var(--gold); background: transparent; color: var(--gold); text-decoration: none; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; border-radius: 0.3rem; transition: all 0.3s; cursor: pointer;">🔄 Hacer el quiz de nuevo</button>
      </div>
    </div>
  `;

  resultadoDiv.innerHTML = htmlResultado;
  resultadoDiv.style.display = 'block';

  // Scroll a resultado
  setTimeout(() => {
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

function reiniciarQuiz() {
  quiz = new QuizFragancia();
  document.getElementById('quiz-resultado').style.display = 'none';
  document.getElementById('quiz-resultado').innerHTML = '';
  document.getElementById('nombre-usuario').value = '';
  document.getElementById('email-usuario').value = '';
  document.getElementById('telefono-usuario').value = '';
  
  // Limpiar radios
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  
  // Mostrar primera pregunta
  document.querySelectorAll('[data-pregunta]').forEach(p => p.classList.remove('visible'));
  document.getElementById('pregunta-1').classList.add('visible');
  
  document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// VALIDACIONES EN TIEMPO REAL (LIVE)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const inputNombre = document.getElementById('nombre-usuario');
  const inputEmail = document.getElementById('email-usuario');
  const inputTelefono = document.getElementById('telefono-usuario');

  if (inputNombre) {
    inputNombre.addEventListener('input', () => {
      validarCampoEnTiempoReal(inputNombre, 'nombre');
    });
    inputNombre.addEventListener('blur', () => {
      validarCampoEnTiempoReal(inputNombre, 'nombre');
    });
  }

  if (inputEmail) {
    inputEmail.addEventListener('input', () => {
      validarCampoEnTiempoReal(inputEmail, 'email');
    });
    inputEmail.addEventListener('blur', () => {
      validarCampoEnTiempoReal(inputEmail, 'email');
    });
  }

  if (inputTelefono) {
    inputTelefono.addEventListener('input', () => {
      validarCampoEnTiempoReal(inputTelefono, 'telefono');
    });
    inputTelefono.addEventListener('blur', () => {
      validarCampoEnTiempoReal(inputTelefono, 'telefono');
    });
  }
});

function validarCampoEnTiempoReal(input, tipo) {
  let validacion = { valido: true };
  
  if (tipo === 'nombre') {
    validacion = validarNombre(input.value);
  } else if (tipo === 'email') {
    validacion = validarEmail(input.value);
  } else if (tipo === 'telefono') {
    validacion = validarTelefono(input.value);
  }

  // Obtener o crear div de error
  let errorDiv = input.nextElementSibling;
  if (!errorDiv || !errorDiv.classList.contains('campo-error')) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'campo-error';
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }

  if (validacion.valido && input.value.trim()) {
    // ✅ Válido
    input.style.borderColor = '#c9a96e';
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    input.style.boxShadow = '0 0 0 2px rgba(201, 169, 110, 0.2)';
  } else if (!validacion.valido) {
    // ❌ Inválido
    input.style.borderColor = '#ff6b6b';
    errorDiv.textContent = validacion.error.replace('🔴 ', '');
    errorDiv.style.display = 'block';
    input.style.boxShadow = '0 0 0 2px rgba(255, 107, 107, 0.2)';
  } else {
    // Vacío pero no enviado aún
    input.style.borderColor = 'rgba(201,169,110,0.2)';
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    input.style.boxShadow = 'none';
  }
}

// ========================================
// INTEGRACIÓN SUPABASE
// ========================================
async function guardarQuizEnSupabase(nombre, email, telefono, respuestas, fragancia) {
  try {
    const resultado = await saveQuizResponse(email, telefono, {
      nombre,
      ...respuestas
    }, fragancia.nombre);

    if (resultado.success) {
      console.log('✅ Quiz guardado en Supabase');
    } else {
      console.warn('⚠️ Error al guardar (continuando sin Supabase):', resultado.error);
    }
  } catch (error) {
    console.warn('⚠️ Supabase no disponible (modo local):', error.message);
  }
}
