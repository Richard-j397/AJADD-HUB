const ADMIN_USER_ID = "6ac64329000334a381dd";

const PROJECT_ID = "6ac62abb001c74bb8de5";

async function verifierAdministrateur() {
    try {
        const response = await fetch(
            "https://cloud.appwrite.io/v1/account",
            {
                method: "GET",
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "X-Appwrite-Project": PROJECT_ID
                }
            }
        );

        if (!response.ok) {
            window.location.href = "Connexion.html";
            return;
        }

        const user = await response.json();

        if (user.$id !== ADMIN_USER_ID) {
            alert("Accès réservé à l'administrateur principal AJADD HUB.");
            window.location.href = "dashboard.html";
            return;
        }

        console.log("Administrateur principal vérifié :", user.$id);

    } catch (error) {
        console.error("Erreur de sécurité :", error);
        window.location.href = "Connexion.html";
    }
}

verifierAdministrateur();