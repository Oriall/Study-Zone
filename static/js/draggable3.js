 const draggableDiv = document.getElementById('draggableDiv');
        let Xoff, Yoff, iDra = false;

        draggableDiv.addEventListener('mousedown', (e) => {
            iDra = true;
            Xoff = e.clientX - draggableDiv.getBoundingClientRect().left;
            Yoff = e.clientY - draggableDiv.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (e) => {
            if (iDra) {
                draggableDiv.style.left = e.clientX - Xoff + 'px';
                draggableDiv.style.top = e.clientY - Yoff + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            iDra = false;
        });

        // Make the div resizable
        const resizableDiv = draggableDiv;
        let isResizing = false;

        resizableDiv.addEventListener('mousedown', (e) => {
            if (e.target === resizableDiv) {
                isResizing = true;
                Xoff = e.clientX - resizableDiv.offsetWidth;
                Yoff = e.clientY - resizableDiv.offsetHeight;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isResizing) {
                resizableDiv.style.width = e.clientX - Xoff + 'px';
                resizableDiv.style.height = e.clientY - Yoff + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
        });