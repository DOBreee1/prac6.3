document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Перешкоджаємо стандартній події відправлення форми
  
    // Отримуємо значення з форми
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Базова валідація
    if (password !== confirmPassword) {
      alert("Паролі не співпадають");
      return;
    }
  
    // Створюємо об'єкт з даними користувача
    var userData = {
      username: username,
      email: email,
      password: password
    };
  
    // Відправляємо дані на сервер
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your_server_url_here", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText); // Результат обробки на сервері
        alert("Користувач успішно зареєстрований!");
        document.getElementById("registrationForm").reset(); // Скидуємо форму
      }
    };
    xhr.send(JSON.stringify(userData));
  });
  