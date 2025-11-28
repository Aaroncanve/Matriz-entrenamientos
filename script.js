const areaInput = document.getElementById("areaInput");
const personInput = document.getElementById("personInput");
const trainingInput = document.getElementById("trainingInput");
const addRecordBtn = document.getElementById("addRecordBtn");

const areaSelect = document.getElementById("areaSelect");
const personSelect = document.getElementById("personSelect");

const trainingsTitle = document.getElementById("trainingsTitle");
const trainingsEmpty = document.getElementById("trainingsEmpty");
const trainingsList = document.getElementById("trainingsList");

const summaryOutput = document.getElementById("summaryOutput");

// Estructura de datos:
// data = { area: { persona: [entrenamientos] } }
const data = {};

function addRecord() {
  const area = areaInput.value.trim();
  const person = personInput.value.trim();
  const trainingsRaw = trainingInput.value
    .split(",")
    .map(t => t.trim())
    .filter(t => t.length > 0);

  if (!area || !person || trainingsRaw.length === 0) {
    alert("Completa área, persona y al menos un entrenamiento.");
    return;
  }

  if (!data[area]) {
    data[area] = {};
  }

  if (!data[area][person]) {
    data[area][person] = [];
  }

  trainingsRaw.forEach(t => {
    if (!data[area][person].includes(t)) {
      data[area][person].push(t);
    }
  });

  areaInput.value = "";
  personInput.value = "";
  trainingInput.value = "";

  updateSelectors();
  updateSummary();

  if (areaSelect.value === "" || areaSelect.value === area) {
    areaSelect.value = area;
    updatePersonSelector();
    personSelect.value = person;
    renderTrainings();
  }
}

function updateSelectors() {
  const areas = Object.keys(data).sort();

  areaSelect.innerHTML = '<option value="">Selecciona un área</option>';
  areas.forEach(area => {
    const opt = document.createElement("option");
    opt.value = area;
    opt.textContent = area;
    areaSelect.appendChild(opt);
  });

  if (!data[areaSelect.value]) {
    personSelect.innerHTML =
      '<option value="">Selecciona una persona</option>';
    personSelect.disabled = true;
  }
}

function updatePersonSelector() {
  const selectedArea = areaSelect.value;

  if (!selectedArea || !data[selectedArea]) {
    personSelect.innerHTML =
      '<option value="">Selecciona una persona</option>';
    personSelect.disabled = true;
    clearTrainings();
    return;
  }

  const persons = Object.keys(data[selectedArea]).sort();

  personSelect.innerHTML = '<option value="">Selecciona una persona</option>';
  persons.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    personSelect.appendChild(opt);
  });

  personSelect.disabled = persons.length === 0;

  if (persons.length === 0) {
    clearTrainings();
  } else {
    clearTrainings();
  }
}

function renderTrainings() {
  const selectedArea = areaSelect.value;
  const selectedPerson = personSelect.value;

  trainingsList.innerHTML = "";

  if (!selectedArea || !selectedPerson || !data[selectedArea] || !data[selectedArea][selectedPerson]) {
    clearTrainings();
    return;
  }

  const trainings = data[selectedArea][selectedPerson];

  trainingsTitle.textContent =
    "Entrenamientos de " + selectedPerson + " en " + selectedArea;
  trainingsEmpty.style.display = trainings.length === 0 ? "block" : "none";

  trainings.forEach(t => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = t;
    trainingsList.appendChild(tag);
  });
}

function clearTrainings() {
  trainingsTitle.textContent = "Entrenamientos";
  trainingsEmpty.style.display = "block";
  trainingsList.innerHTML = "";
}

function updateSummary() {
  const result = [];

  Object.keys(data).forEach(area => {
    Object.keys(data[area]).forEach(person => {
      result.push({
        area,
        persona: person,
        entrenamientos: data[area][person]
      });
    });
  });

  summaryOutput.value = JSON.stringify(result, null, 2);
}

addRecordBtn.addEventListener("click", addRecord);
areaSelect.addEventListener("change", () => {
  updatePersonSelector();
});
personSelect.addEventListener("change", () => {
  renderTrainings();
});
