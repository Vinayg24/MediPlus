// Predefined medicine suggestions for common diseases
const diseaseMedicineData = {
    "Common Cold": "Paracetamol, Ibuprofen",
    "Flu": "Oseltamivir (Tamiflu), Zanamivir (Relenza)",
    "Migraine": "Sumatriptan, Rizatriptan",
    "Hypertension": "Amlodipine, Lisinopril",
    "Diabetes": "Metformin, Insulin",
    "Asthma": "Albuterol (Ventolin), Salmeterol (Serevent)",
    "COVID-19": "Paxlovid, Remdesivir"
};

// Function to simulate diagnosis based on symptoms
function infermedicaDiagnosis(symptoms) {
    // Simulating some possible conditions based on symptoms
    const possibleConditions = {
        "fever": ["Flu", "Common Cold", "COVID-19"],
        "headache": ["Migraine", "Hypertension"],
        "cough": ["Common Cold", "Asthma", "COVID-19"],
        "shortness of breath": ["Asthma", "COVID-19"],
        "fatigue": ["Diabetes", "Flu", "COVID-19"]
    };

    let foundConditions = new Set();
    symptoms.forEach(symptom => {
        symptom = symptom.trim().toLowerCase();
        if (possibleConditions[symptom]) {
            possibleConditions[symptom].forEach(condition => foundConditions.add(condition));
        }
    });

    return Array.from(foundConditions);
}

// Function to get medicine suggestion from predefined data
function getMedicineForDisease(diseaseName) {
    return diseaseMedicineData[diseaseName] || "No medicine found for this disease.";
}

// Function to handle chatbot logic on button click
document.getElementById("diagnoseButton").addEventListener("click", function() {
    const symptomsInput = document.getElementById("symptoms").value;
    const symptoms = symptomsInput.split(',');

    if (!symptomsInput.trim()) {
        alert("Please enter symptoms.");
        return;
    }

    const conditions = infermedicaDiagnosis(symptoms);

    const resultTextbox = document.getElementById("resultTextbox");
    resultTextbox.value = ""; // Clear previous result

    if (conditions.length > 0) {
        resultTextbox.value += "Possible diseases:\n";
        conditions.forEach(diseaseName => {
            resultTextbox.value += `${diseaseName}\n`;

            // Get medicine suggestion for each disease
            const medicine = getMedicineForDisease(diseaseName);
            resultTextbox.value += `SuggestedMedicine; ${medicine}\n\n`;
        });
    } else {
        resultTextbox.value = "No conditions found.\n";
    }
});