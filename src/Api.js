// Import statements should be at the top
import fetch from 'node-fetch';  // Assuming you're using Node.js and need to import fetch


// Rest of the code

// Define your functions
export async function login(username, password) {
  try {
    let resposta = await fetch("api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        Username: username,      
        Password: password,
      }),
    });
    let token = await resposta.json();
    console.log(token);
  } catch (error) {
    console.log("Erro ao validar login.");
  }
}

export async function getOficinas() {
  try {
    const response = await fetch("api/Oficinas");
    if (!response.ok) {
      throw new Error(`Erro ao fazer fetch oficinas data. HTTP Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Erro ao fazer fetch dos dados das oficinas: ${error.message}`);
  }
}