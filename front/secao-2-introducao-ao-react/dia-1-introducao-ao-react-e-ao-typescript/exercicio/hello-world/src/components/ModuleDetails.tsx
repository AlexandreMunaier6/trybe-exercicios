function ModuleDetails() {
  const modules = ['Fundamentos', 'Front-End', 'Back-End', 'Ciência da Computação'];
  return (
    <p>
      {`${modules[0]}, ${modules[1]}, ${modules[2]} e ${modules[3]}`}
    </p>
  );
}

export default ModuleDetails;
