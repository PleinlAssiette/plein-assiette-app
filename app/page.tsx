export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Plein l’Assiette – Application</h1>
      <p>Bienvenue dans la version MVP. Tu es prête à construire l'expérience complète.</p>

      <div style={{ marginTop: "1.5rem" }}>
        <a href="/login">Se connecter</a>
        <br />
        <a href="/register">Créer un compte</a>
      </div>
    </main>
  );
}

