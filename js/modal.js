// modal.js
document.addEventListener('DOMContentLoaded', () => {
    // Função para abrir o modal
    const openModal = (category) => {
      document.body.classList.add('modal-open');
      document.getElementById('modalOverlay').classList.add('active');
      
      document.querySelectorAll('.modal-content').forEach(content => {
        content.style.display = content.dataset.category === category ? 'block' : 'none';
      });
    };
  
    // Função para fechar o modal
    const closeModal = () => {
      document.body.classList.remove('modal-open');
      document.getElementById('modalOverlay').classList.remove('active');
    };
  
    // Evento de clique nos cards
    document.querySelectorAll('.card-link').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.dataset.category;
        openModal(category);
      });
    });
  
    // Evento de clique no botão de fechar
    document.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });
  
    // Evento de clique fora do modal
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target === document.getElementById('modalOverlay')) {
        closeModal();
      }
    });
  
    // Evento de tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  
    // Prevenir scroll com roda do mouse no modal
    document.querySelector('.modal').addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
  });