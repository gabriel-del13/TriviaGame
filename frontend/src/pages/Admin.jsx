import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { adminLogin, createCategory, createQuestion, getCategories } from '../utils/api';
import Watermark from '../components/Watermark';

export default function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [categories, setCategories] = useState([]);

  // Category form
  const [categoryName, setCategoryName] = useState('');
  const [categorySlug, setCategorySlug] = useState('');

  // Question form
  const [questionData, setQuestionData] = useState({
    category_id: '',
    question: '',
    options: ['', '', '', ''],
    correct_index: 0,
    difficulty: 'medium'
  });

  useEffect(() => {
    // Verificar si hay un token guardado
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      const savedUsername = localStorage.getItem('adminUsername');
      if (savedUsername) setUsername(savedUsername);
    }
  }, []);

  useEffect(() => {
    // Cargar categorías cuando el usuario esté autenticado
    if (isAuthenticated) {
      loadCategories();
    }
  }, [isAuthenticated]);

  const loadCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (err) {
      console.error('Error cargando categorías:', err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await adminLogin({ username, password });
      const { token: newToken, username: user } = response.data;
      
      setToken(newToken);
      setIsAuthenticated(true);
      localStorage.setItem('adminToken', newToken);
      localStorage.setItem('adminUsername', user);
      setSuccess('Login exitoso');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    setUsername('');
    setPassword('');
    setSuccess('Sesión cerrada');
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!categoryName || !categorySlug) {
      setError('Por favor completa todos los campos');
      return;
    }

    try {
      await createCategory({ name: categoryName, slug: categorySlug }, token);
      setSuccess('Categoría creada exitosamente');
      setCategoryName('');
      setCategorySlug('');
      // Recargar categorías para que aparezca en el selector
      await loadCategories();
    } catch (err) {
      setError(err.response?.data?.error || 'Error al crear categoría');
    }
  };

  const handleCreateQuestion = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!questionData.category_id || !questionData.question || 
        questionData.options.some(opt => !opt.trim())) {
      setError('Por favor completa todos los campos');
      return;
    }

    try {
      await createQuestion(questionData, token);
      setSuccess('Pregunta creada exitosamente');
      setQuestionData({
        category_id: '',
        question: '',
        options: ['', '', '', ''],
        correct_index: 0,
        difficulty: 'medium'
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Error al crear pregunta');
    }
  };

  const updateOption = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData({ ...questionData, options: newOptions });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-2 sm:p-4">
        <div className="max-w-md mx-auto py-8 sm:py-12">
          <Card>
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                🔐 Admin Panel
              </h1>
              <p className="text-gray-600">Inicia sesión para continuar</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Usuario
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Iniciar Sesión
              </Button>
            </form>

            <div className="mt-4 text-center">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="w-full"
              >
                Volver al Inicio
              </Button>
            </div>

            <Watermark />
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            🔐 Admin Panel
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            Bienvenido, {localStorage.getItem('adminUsername') || username}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Create Category */}
          <Card>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Crear Categoría</h2>
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  placeholder="Ej: Deportes"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  value={categorySlug}
                  onChange={(e) => setCategorySlug(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  placeholder="Ej: deportes"
                  required
                />
              </div>

              <Button type="submit" variant="success" className="w-full">
                Crear Categoría
              </Button>
            </form>
          </Card>

          {/* Create Question */}
          <Card>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Crear Pregunta</h2>
            <form onSubmit={handleCreateQuestion} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoría
                </label>
                <select
                  value={questionData.category_id}
                  onChange={(e) => setQuestionData({ ...questionData, category_id: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pregunta
                </label>
                <textarea
                  value={questionData.question}
                  onChange={(e) => setQuestionData({ ...questionData, question: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  rows="3"
                  placeholder="Escribe la pregunta aquí..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opciones de Respuesta
                </label>
                {questionData.options.map((option, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <input
                        type="radio"
                        name="correct"
                        checked={questionData.correct_index === index}
                        onChange={() => setQuestionData({ ...questionData, correct_index: index })}
                        className="w-4 h-4 text-indigo-600"
                      />
                      <label className="text-xs text-gray-600">
                        {index === questionData.correct_index ? '✓ Correcta' : 'Opción ' + (index + 1)}
                      </label>
                    </div>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateOption(index, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
                      placeholder={`Opción ${index + 1}`}
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dificultad
                </label>
                <select
                  value={questionData.difficulty}
                  onChange={(e) => setQuestionData({ ...questionData, difficulty: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                >
                  <option value="easy">Fácil</option>
                  <option value="medium">Medio</option>
                  <option value="hard">Difícil</option>
                </select>
              </div>

              <Button type="submit" variant="success" className="w-full">
                Crear Pregunta
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="bg-white/10 border-white text-white hover:bg-white/20"
          >
            Volver al Inicio
          </Button>
          <Button 
            variant="danger" 
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
        </div>

        <Watermark />
      </div>
    </div>
  );
}

