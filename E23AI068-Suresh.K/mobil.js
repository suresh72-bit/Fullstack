const phones = [
      {
        id: 1,
        name: "iPhone 14",
        price: 799,
        ram: 6,
        storage: 128,
        battery: 3279,
        rating: 4.6
      },
      {
        id: 2,
        name: "Samsung Galaxy S23",
        price: 749,
        ram: 8,
        storage: 256,
        battery: 3900,
        rating: 4.7
      },
      {
        id: 3,
        name: "OnePlus 11",
        price: 699,
        ram: 12,
        storage: 256,
        battery: 5000,
        rating: 4.5
      }
    ];

    const phoneASelect = document.getElementById("phoneA");
    const phoneBSelect = document.getElementById("phoneB");
    const comparisonDiv = document.getElementById("comparison");

  
    phones.forEach(phone => {
      const optionA = new Option(phone.name, phone.id);
      const optionB = new Option(phone.name, phone.id);
      phoneASelect.add(optionA);
      phoneBSelect.add(optionB);
    });

    phoneASelect.selectedIndex = 0;
    phoneBSelect.selectedIndex = 1;

    function renderComparison() {
      const phoneA = phones.find(p => p.id == phoneASelect.value);
      const phoneB = phones.find(p => p.id == phoneBSelect.value);

      if (!phoneA || !phoneB) return;

    
      const { name, price, ram, storage, battery, rating } = phoneA;
      const a = phoneA;
      const b = phoneB;

      comparisonDiv.innerHTML = `
        ${createCard(a, b)}
        ${createCard(b, a)}
      `;
    }

    function createCard(phone, otherPhone) {
      const { name, price, ram, storage, battery, rating } = phone;

      return `
        <div class="card">
          <h2>${name}</h2>
          <div class="spec">
            <span>Price ($)</span>
            <span class="${price < otherPhone.price ? 'highlight' : ''}">
              ${price}
            </span>
          </div>
          <div class="spec">
            <span>RAM (GB)</span>
            <span class="${ram > otherPhone.ram ? 'highlight' : ''}">
              ${ram}
            </span>
          </div>
          <div class="spec">
            <span>Storage (GB)</span>
            <span class="${storage > otherPhone.storage ? 'highlight' : ''}">
              ${storage}
            </span>
          </div>
          <div class="spec">
            <span>Battery (mAh)</span>
            <span class="${battery > otherPhone.battery ? 'highlight' : ''}">
              ${battery}
            </span>
          </div>
          <div class="spec">
            <span>Rating</span>
            <span class="${rating > otherPhone.rating ? 'highlight' : ''}">
              ⭐ ${rating}
            </span>
          </div>
        </div>
      `;
    }

    phoneASelect.addEventListener("change", renderComparison);
    phoneBSelect.addEventListener("change", renderComparison);

    renderComparison();
  