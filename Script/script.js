        document.getElementById('hamburger').addEventListener('click' , () =>{
            document.getElementById('navLinks').classList.toggle('open');
        });
        function filterPhones(){
            const selected = document.getElementById('brandFilter').value;
            const cards = document.querySelectorAll('.phone-card');
            let count = 0;
            cards.forEach(card => {
                const matches = selected === 'all' || card.dataset.brand === selected;
                card.classList.toggle('hide', !matches);
                if (matches) count++;
            });
            document.getElementById('resultCount').textContent = count;
        }
        function showToast(msg){
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'),3200);
        }