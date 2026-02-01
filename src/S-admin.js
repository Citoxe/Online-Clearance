function showPage(pageId) {

    const pages = ['dashboard-page', 'students-page', 'departments-page', 'ac-log-page'];

    pages.forEach(id => {
      const page = document.getElementById(id);
      if (page) {
        page.classList.add('hidden');
      }
    });

    document.getElementById(pageId).classList.remove('hidden');
  }