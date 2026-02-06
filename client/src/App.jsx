/**
 * App Component
 * Ana uygulama bileşeni
 */
import { MainLayout } from './layouts';
import { useFilms, useNotification } from './hooks';
import { 
  AddFilmForm, 
  FilmList, 
  StatsCard,
  Card, 
  Spinner, 
  Notification,
  Button 
} from './components';
import './App.css';

function App() {
  // Custom hooks kullanımı
  const { 
    films, 
    loading, 
    error, 
    stats,
    loadFilms, 
    addFilm, 
    updateFilm, 
    deleteFilm 
  } = useFilms();
  
  const { 
    notification, 
    showSuccess, 
    showError, 
    hideNotification 
  } = useNotification();

  // Film ekle
  const handleAddFilm = async (title, year) => {
    try {
      await addFilm(title, year);
      showSuccess('Film başarıyla eklendi! 🎬');
    } catch (err) {
      showError('Film eklenirken hata oluştu');
    }
  };

  // Film sil
  const handleDeleteFilm = async (id) => {
    try {
      await deleteFilm(id);
      showSuccess('Film silindi 🗑️');
    } catch (err) {
      showError('Film silinirken hata oluştu');
    }
  };

  // Film güncelle
  const handleUpdateFilm = async (id, title, year) => {
    try {
      await updateFilm(id, title, year);
      showSuccess('Film güncellendi ✨');
    } catch (err) {
      showError('Film güncellenirken hata oluştu');
    }
  };

  // İçerik render
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-12">
          <Spinner size="md" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8">
          <p className="text-red-400 mb-4">{error}</p>
          <div className="text-gray-500 mb-4">
            Şu anda <b>demo modundasınız</b>.<br />
            Backend (API) bağlı olmadığı için film verisi yüklenemiyor.<br />
            Sadece arayüzü test edebilirsiniz.
          </div>
          <Button onClick={loadFilms} variant="primary">
            Tekrar Dene
          </Button>
        </div>
      );
    }

    return (
      <FilmList
        films={films}
        onDelete={handleDeleteFilm}
        onUpdate={handleUpdateFilm}
      />
    );
  };

  return (
    <MainLayout>
      {/* Bildirim */}
      <Notification 
        notification={notification} 
        onClose={hideNotification} 
      />

      {/* Ana İçerik */}
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 md:p-8">
          <AddFilmForm onAdd={handleAddFilm} disabled={loading} />
          {renderContent()}
        </Card>

        {/* İstatistikler */}
        {!loading && !error && <StatsCard stats={stats} />}
      </div>
    </MainLayout>
  );
}

export default App;
