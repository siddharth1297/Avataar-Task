window.addEventListener('resize', handleResize);

function handleResize() {
    const mainMenu = document.getElementById('menu-list');
    const moreSection = document.getElementById('more-section');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Move items to "More" section
        const menuItems = mainMenu.children;
        for (let i = menuItems.length - 1; i >= 0; i--) {
            if (menuItems[i].offsetLeft + menuItems[i].offsetWidth > screenWidth) {
                moreSection.insertBefore(menuItems[i], moreSection.firstChild);
            }
        }
        moreSection.style.display = 'block';
    } else {
        // Reintegrate items from "More" section
        const moreItems = moreSection.children[0].children;
        for (let i = moreItems.length - 1; i >= 0; i--) {
            if (moreItems[i].offsetLeft + moreItems[i].offsetWidth < screenWidth) {
                mainMenu.appendChild(moreItems[i]);
            }
        }
        if (moreSection.children[0].children.length === 0) {
            moreSection.style.display = 'none';
        }
    }
}

// Initial call to handleResize
handleResize();

