import foroImage from '../../../assets/images/banner.png';

const LandingPage = () => {
  return (
    <div className="font-sans mx-auto p-5 max-w-4xl">
      <section className="text-center mb-8">
        <img src={foroImage} alt="Foro" className="w-full h-auto rounded-lg" />
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Bienvenido al Foro de MotorLabs&Riders</h2>
        <p className="text-lg">
          Este es un espacio para compartir conocimientos, experiencias y pasión por el mundo de las motocicletas y la tecnología.
          Te invitamos a unirte a nuestra comunidad, participar en las discusiones y aprender junto a nosotros.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Normas del Foro</h2>
        <ol className="list-decimal list-inside text-lg">
          <li>Respeta a los demás miembros de la comunidad.</li>
          <li>No se permite el uso de lenguaje ofensivo o discriminatorio.</li>
          <li>Mantén las discusiones en el tema correspondiente.</li>
          <li>Proporciona información veraz y fuentes confiables.</li>
          <li>No se permite la promoción de productos o servicios sin autorización.</li>
          <li>Habrá un hilo especifico para solicitar Categorías.</li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Únete a la Comunidad</h2>
        <p className="text-lg">
          ¡Estamos emocionados de tenerte aquí! Regístrate y empieza a participar en nuestras discusiones hoy mismo.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-lg">
          Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos a motorlabsandriders@gmail.com .
        </p>
      </section>
    </div>
  );
};

export default LandingPage;