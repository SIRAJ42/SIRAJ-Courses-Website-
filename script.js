function showCourses() {
            const container = document.getElementById("courses");
            container.style.display = "flex";

            const cards = document.querySelectorAll(".card");

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200);
            });
        }

        function zoomCard(card) {
            document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        }