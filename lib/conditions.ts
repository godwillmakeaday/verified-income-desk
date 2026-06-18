// lib/conditions.ts
// Sample clinical content. In production these records would be served from a
// CMS or database; the rendering layer never changes — only the data grows.
//
// NOTE: Reviewer names and review dates below are PLACEHOLDERS for demonstration.
// Real publication requires sign-off under the Institute's Medical Review Policy.

import type { HealthArticle } from "./types";

export const conditions: HealthArticle[] = [
  // ─────────────────────────────────────────────────────────── HYPERTENSION
  {
    slug: "hypertension",
    title: "Hypertension (High Blood Pressure)",
    category: "condition",
    specialtyCentre: "heart-blood-pressure",
    summary:
      "Persistently raised blood pressure. Usually silent, and a leading cause of stroke, heart failure and kidney disease in Nigeria.",
    metaDescription:
      "Plain-language guide to hypertension (high blood pressure) for Nigerian patients: symptoms, diagnosis, treatment, prevention and when care is urgent.",
    readingTimeMinutes: 9,
    urgency: "see-doctor",
    overview: [
      "Hypertension means the pressure of blood against the walls of your arteries stays high over time. Blood pressure is written as two numbers — the higher (systolic) over the lower (diastolic), measured in mmHg. Most guidelines describe a reading of 140/90 mmHg or above, confirmed on more than one occasion, as raised.",
      "It is often called a “silent” condition because most people feel completely well for years while the pressure quietly strains the heart, brain, kidneys and eyes. This is why it is frequently discovered late — sometimes only after a stroke or heart problem has already occurred.",
      "Hypertension is common and very treatable. With accurate measurement, lifestyle change and, where needed, medication taken consistently, the risk of serious complications falls substantially.",
    ],
    symptoms: {
      common: [
        "Usually no symptoms at all — most people feel normal",
        "Occasional headaches, especially at the back of the head in the morning",
        "Dizziness or a feeling of unsteadiness",
        "Tiredness or difficulty concentrating",
      ],
      warning: [
        "Severe headache with blurred or disturbed vision",
        "Chest pain, breathlessness or palpitations",
        "Weakness or numbness on one side of the body, or difficulty speaking",
        "Nosebleeds that are heavy or repeated alongside a very high reading",
      ],
    },
    causes: [
      "In most people there is no single cause; this is called primary (essential) hypertension and develops gradually with age and lifestyle.",
      "Secondary hypertension is caused by another condition — for example kidney disease, hormonal disorders, or certain medications — and may be reversible if the cause is treated.",
      "High salt intake, excess weight, low physical activity, heavy alcohol use and chronic stress all raise the risk.",
    ],
    riskFactors: [
      "Family history of high blood pressure",
      "Age above 40 (risk rises with age)",
      "Diets high in salt and processed or packaged foods",
      "Overweight and obesity",
      "Physical inactivity",
      "Excess alcohol and tobacco use",
      "Diabetes and chronic kidney disease",
    ],
    diagnosis: [
      "Hypertension is diagnosed by measuring blood pressure correctly on at least two separate occasions, not from a single reading.",
      "Your clinician may recommend home or 24-hour monitoring to rule out anxiety-related (“white coat”) readings.",
      "Further tests — urine analysis, blood sugar, kidney function, cholesterol and an ECG — check for causes and for early organ damage.",
    ],
    treatment: {
      lifestyle: [
        "Reduce salt: cook with less, avoid adding salt at the table, and limit seasoning cubes, dried fish and processed meats",
        "Reach and keep a healthy weight",
        "Be active most days — brisk walking counts",
        "Limit alcohol and stop smoking",
        "Eat more vegetables, fruit, beans and whole grains",
      ],
      medical: [
        "Several safe, affordable medicine groups are used — often a water tablet (diuretic), a calcium-channel blocker, or an ACE inhibitor/ARB.",
        "Many people need more than one medicine to reach target; this is normal and not a sign of failure.",
        "Medication usually continues long term. Blood pressure returns when tablets are stopped, so they should not be stopped without medical advice — even when you feel well.",
      ],
    },
    prevention: [
      "Have your blood pressure checked at least yearly from age 18, and more often if you have risk factors",
      "Keep salt intake low and maintain a healthy weight",
      "Stay physically active and manage stress",
      "Limit alcohol and avoid tobacco",
    ],
    complications: [
      "Stroke and transient ischaemic attack",
      "Heart failure and heart attack",
      "Chronic kidney disease and kidney failure",
      "Damage to the eyes and loss of vision",
    ],
    urgentCare: [
      "A blood pressure reading at or above 180/120 mmHg with chest pain, breathlessness, severe headache, vision change, confusion, or weakness on one side of the body is a medical emergency — seek care immediately.",
      "Sudden face drooping, arm weakness or slurred speech may be a stroke — act without delay (see the Stroke guide).",
    ],
    nigerianContext: [
      "Hypertension is widespread in Nigeria but often diagnosed late, because many people only check their blood pressure when they already feel unwell.",
      "Treatment is sometimes stopped once a person “feels fine” or when money is tight, which allows pressure and risk to return silently. Consistency matters more than any single reading.",
      "Self-medication and unverified herbal “blood pressure cures” are common and can be harmful. Use medicines prescribed and monitored by a qualified professional.",
      "Affordable, validated home blood pressure monitors and generic medicines are increasingly available; ask your pharmacist or clinic for guidance on reliable options.",
    ],
    questionsForDoctor: [
      "What is my target blood pressure, and what were my last readings?",
      "Do my results suggest any damage to my heart, kidneys or eyes?",
      "Which lifestyle change would make the biggest difference for me?",
      "What are the names and timings of my medicines, and what side effects should I watch for?",
      "How often should I check my blood pressure at home?",
    ],
    faqs: [
      {
        question: "Can hypertension be cured?",
        answer:
          "Primary hypertension is usually controlled rather than cured. With consistent treatment and lifestyle change it can be kept in a safe range for life. Some secondary causes can be corrected.",
      },
      {
        question: "If I feel fine, can I stop my tablets?",
        answer:
          "No. Feeling well does not mean your blood pressure is normal — that is exactly why it is dangerous. Speak to your clinician before changing any medication.",
      },
      {
        question: "Is high blood pressure caused by stress alone?",
        answer:
          "Stress can raise blood pressure temporarily and contribute over time, but it is rarely the only cause. Genetics, diet, weight and age usually play a larger role.",
      },
    ],
    sources: [
      { label: "Hypertension fact sheet", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/news-room/fact-sheets/detail/hypertension" },
      { label: "Global guidelines on the management of hypertension", publisher: "International Society of Hypertension", year: 2020 },
      { label: "National guidelines on non-communicable disease prevention and control", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    reviewer: { name: "Dr. A. Okonkwo (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Cardiology" },
    lastReviewed: "2026-04-12",
    nextReview: "2027-04-12",
  },

  // ───────────────────────────────────────────────────────────────── DIABETES
  {
    slug: "diabetes",
    title: "Diabetes (Type 2)",
    category: "condition",
    specialtyCentre: "diabetes-metabolic",
    summary:
      "A long-term condition where blood sugar stays too high. Manageable with the right care, but a serious cause of complications when left unchecked.",
    metaDescription:
      "Nigerian patient guide to type 2 diabetes: symptoms, causes, diagnosis, treatment, prevention, complications and when to seek urgent care.",
    readingTimeMinutes: 10,
    urgency: "see-doctor",
    overview: [
      "Diabetes is a condition where the level of sugar (glucose) in the blood is too high. In type 2 diabetes — the most common form — the body either does not respond well to insulin or does not make enough of it. Insulin is the hormone that moves sugar from the blood into the cells for energy.",
      "Type 1 diabetes, in which the body makes little or no insulin, usually begins earlier in life and always requires insulin. Diabetes that appears in pregnancy is called gestational diabetes. This guide focuses on type 2.",
      "High blood sugar over many years damages blood vessels and nerves. The good news is that with monitoring, healthy habits and, where needed, medication, most people with type 2 diabetes live full and active lives.",
    ],
    symptoms: {
      common: [
        "Passing urine more often, especially at night",
        "Feeling very thirsty",
        "Tiredness and low energy",
        "Unexplained weight loss",
        "Slow-healing cuts, or repeated infections such as boils or thrush",
        "Blurred vision",
      ],
      warning: [
        "Very high thirst with drowsiness, confusion or rapid breathing",
        "Severe weakness, vomiting and abdominal pain",
        "Fruity-smelling breath (a sign of a dangerous complication)",
      ],
    },
    causes: [
      "Type 2 diabetes develops when the body becomes resistant to insulin and the pancreas cannot keep up. Genetics, weight and lifestyle all contribute.",
      "It usually develops gradually, often over years, which is why many people have it before they are diagnosed.",
    ],
    riskFactors: [
      "Family history of diabetes",
      "Overweight and abdominal (belly) fat",
      "Physical inactivity",
      "Diets high in sugar, refined starches and sweetened drinks",
      "Age above 40",
      "High blood pressure or raised cholesterol",
      "A history of gestational diabetes or a large baby at birth",
    ],
    diagnosis: [
      "Diabetes is diagnosed with blood tests — fasting blood glucose, a glucose tolerance test, or HbA1c (which reflects average sugar over about three months).",
      "Because early diabetes is often silent, screening is recommended for people with risk factors even when they feel well.",
      "At diagnosis your clinician also checks blood pressure, cholesterol, kidneys, eyes and feet to find or prevent early complications.",
    ],
    treatment: {
      lifestyle: [
        "Eat regular, balanced meals; reduce sugary drinks, refined starch and large portions",
        "Choose more vegetables, beans, whole grains and fruit in moderation",
        "Be active most days — even regular brisk walking improves blood sugar",
        "Reach and keep a healthier weight",
        "Stop smoking and limit alcohol",
      ],
      medical: [
        "Metformin is usually the first medicine and is affordable and widely available.",
        "Other tablets or injectables may be added depending on blood sugar and other conditions.",
        "Some people eventually need insulin — this is a normal part of treatment, not a personal failure.",
        "Regular monitoring of blood sugar, HbA1c, blood pressure, eyes, kidneys and feet is essential.",
      ],
    },
    prevention: [
      "Maintain a healthy weight and stay active",
      "Limit sugary drinks, sweets and refined starches",
      "Get screened if you have a family history or other risk factors",
      "Treat high blood pressure and cholesterol",
    ],
    complications: [
      "Damage to the eyes, which can lead to blindness if untreated",
      "Kidney disease and kidney failure",
      "Nerve damage and foot ulcers, which can lead to amputation",
      "Heart disease and stroke",
    ],
    urgentCare: [
      "Confusion, drowsiness, rapid breathing, persistent vomiting or fruity-smelling breath may signal a dangerous rise in blood sugar (diabetic ketoacidosis or hyperosmolar state) — seek emergency care now.",
      "Shakiness, sweating, confusion or fainting may signal low blood sugar (hypoglycaemia). If the person can swallow, give sugar or a sweet drink and seek help; if they cannot, get emergency care immediately.",
    ],
    nigerianContext: [
      "Diabetes is rising quickly in Nigeria, driven partly by changing diets and urban lifestyles. Many cases are found late, after complications have begun.",
      "The day-to-day cost of test strips, medicines and clinic visits can be a barrier. Ask your clinic about affordable generics, structured monitoring schedules and whether group or facility programmes are available.",
      "Sweetened drinks, large servings of refined starch and frequent snacking on sugary foods are common dietary patterns worth reviewing with a professional.",
      "Be cautious of herbal “sugar cures” and stopping prescribed medicines based on a single good reading. Foot care is especially important where walking barefoot is common.",
    ],
    questionsForDoctor: [
      "What were my blood sugar and HbA1c results, and what is my target?",
      "Which foods should I reduce first, and is there a realistic plan for me?",
      "How and when should I check my blood sugar at home?",
      "What are the signs of high and low blood sugar I should act on?",
      "How often will my eyes, kidneys and feet be checked?",
    ],
    faqs: [
      {
        question: "Is type 2 diabetes reversible?",
        answer:
          "In some people, especially early on, significant weight loss and lifestyle change can bring blood sugar back into the normal range (remission). This is not guaranteed and should be managed with your clinician — never by stopping medicines on your own.",
      },
      {
        question: "Can I eat any fruit?",
        answer:
          "Most fruits are fine in moderate portions. Very sweet fruits and fruit juices raise blood sugar quickly, so whole fruit in measured amounts is preferred.",
      },
      {
        question: "Does diabetes always need insulin?",
        answer:
          "No. Many people with type 2 diabetes manage with lifestyle and tablets. Insulin is used when these are not enough, and it is a safe, effective treatment.",
      },
    ],
    sources: [
      { label: "Diabetes fact sheet", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/news-room/fact-sheets/detail/diabetes" },
      { label: "IDF Diabetes Atlas", publisher: "International Diabetes Federation", year: 2021 },
      { label: "National guidelines for the management of diabetes", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    reviewer: { name: "Dr. C. Bello (placeholder)", credentials: "MBBS, FMCP", specialty: "Endocrinology" },
    lastReviewed: "2026-03-28",
    nextReview: "2027-03-28",
  },

  // ───────────────────────────────────────────────────────────────── MALARIA
  {
    slug: "malaria",
    title: "Malaria",
    category: "condition",
    specialtyCentre: "preventive-health",
    summary:
      "A common, treatable but potentially severe infection spread by mosquitoes. Fast diagnosis and the right treatment prevent serious illness.",
    metaDescription:
      "Nigerian guide to malaria: symptoms, how it is diagnosed and treated, prevention, danger signs of severe malaria, and when to seek urgent care.",
    readingTimeMinutes: 8,
    urgency: "see-doctor",
    overview: [
      "Malaria is an infection caused by Plasmodium parasites, spread to people through the bite of an infected female Anopheles mosquito. In Nigeria the most dangerous type, Plasmodium falciparum, is the most common.",
      "Most malaria is uncomplicated and treats well when caught early. But it can progress to severe, life-threatening illness — particularly in young children, pregnant women and people with weakened immunity — sometimes within a day or two.",
      "Because fever has many causes, malaria should be confirmed by a test before treatment wherever possible, rather than treated on guesswork.",
    ],
    symptoms: {
      common: [
        "Fever, sometimes with chills and sweating",
        "Headache and body or joint aches",
        "Tiredness and weakness",
        "Loss of appetite, nausea or vomiting",
        "Sometimes diarrhoea or abdominal discomfort",
      ],
      warning: [
        "Drowsiness, confusion, or difficulty waking (especially in children)",
        "Repeated vomiting and inability to keep fluids down",
        "Difficulty breathing or very fast breathing",
        "Convulsions (fits)",
        "Very dark or reduced urine, or yellowing of the eyes",
      ],
    },
    causes: [
      "Malaria is caused by Plasmodium parasites transmitted through mosquito bites, most often between dusk and dawn.",
      "It is not spread from person to person by ordinary contact.",
    ],
    riskFactors: [
      "Living in or travelling to areas with high mosquito transmission",
      "Not sleeping under an insecticide-treated net",
      "Pregnancy (greater risk of severe illness)",
      "Young age (children under five are especially vulnerable)",
      "Weakened immunity",
    ],
    diagnosis: [
      "Malaria is confirmed with a rapid diagnostic test (RDT) or by examining blood under a microscope.",
      "Testing matters because treating every fever as malaria delays the correct diagnosis of other illnesses such as typhoid, urinary infection or, in some cases, more serious conditions.",
    ],
    treatment: {
      lifestyle: [
        "Rest and drink fluids to stay hydrated",
        "Use paracetamol for fever and aches as advised",
        "Return for review if you do not improve within 48 hours",
      ],
      medical: [
        "Uncomplicated malaria is treated with artemisinin-based combination therapy (ACT). Complete the full course even after you feel better.",
        "Severe malaria requires injectable treatment and admission to hospital without delay.",
        "Use medicines from registered pharmacies; avoid incomplete or substandard courses, which fuel drug resistance.",
      ],
    },
    prevention: [
      "Sleep under an insecticide-treated mosquito net every night",
      "Use repellents and wear covering clothing in the evening",
      "Reduce mosquito breeding by clearing stagnant water around the home",
      "Pregnant women should attend antenatal care for preventive treatment (IPTp) as recommended",
      "Consider indoor residual spraying where available",
    ],
    complications: [
      "Severe anaemia, especially in children",
      "Cerebral malaria (affecting the brain), with confusion or coma",
      "Breathing and kidney complications",
      "Low blood sugar, particularly in children and pregnancy",
      "Miscarriage, low birth weight or stillbirth in pregnancy",
    ],
    urgentCare: [
      "Seek emergency care immediately for any danger sign: drowsiness or confusion, convulsions, repeated vomiting, difficulty breathing, very dark urine, or a child who is unusually weak or will not feed.",
      "Fever in a pregnant woman or a child under five should always be assessed promptly — do not wait.",
    ],
    nigerianContext: [
      "Nigeria carries one of the highest malaria burdens in the world, and the illness is a leading reason for clinic visits and childhood deaths.",
      "Self-diagnosing and buying antimalarials over the counter for any fever is extremely common. This can mask other serious illnesses and contributes to drug resistance — a test first is safer.",
      "Incomplete treatment courses, taken until symptoms ease and then stopped, are a frequent problem. Always finish the full course.",
      "Free or subsidised insecticide-treated nets are distributed through many clinics and campaigns; ask at your nearest facility.",
    ],
    questionsForDoctor: [
      "Was my malaria confirmed by a test, and which type?",
      "What is the exact medicine, dose and number of days?",
      "What danger signs should bring me back urgently?",
      "How can I best protect my household and, if pregnant, my baby?",
    ],
    faqs: [
      {
        question: "Is every fever malaria?",
        answer:
          "No. Many illnesses cause fever. Treating all fevers as malaria can delay the right diagnosis. A simple test confirms whether malaria is present.",
      },
      {
        question: "Can I stop the medicine once I feel better?",
        answer:
          "No. Stopping early can leave parasites in the body, cause the illness to return and encourage resistance. Always complete the full course.",
      },
      {
        question: "Do mosquito nets really help?",
        answer:
          "Yes. Sleeping under an insecticide-treated net every night is one of the most effective and affordable ways to prevent malaria.",
      },
    ],
    sources: [
      { label: "Malaria fact sheet", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
      { label: "National guidelines for diagnosis and treatment of malaria", publisher: "National Malaria Elimination Programme, Nigeria" },
      { label: "World Malaria Report", publisher: "World Health Organization", year: 2023 },
    ],
    reviewer: { name: "Dr. F. Adeyemi (placeholder)", credentials: "MBBS, MPH", specialty: "Public Health / Infectious Disease" },
    lastReviewed: "2026-05-02",
    nextReview: "2027-05-02",
  },

  // ─────────────────────────────────────────────────────────────────── STROKE
  {
    slug: "stroke",
    title: "Stroke",
    category: "condition",
    specialtyCentre: "heart-blood-pressure",
    summary:
      "A medical emergency where blood flow to part of the brain is cut off. Every minute counts — recognising it fast saves lives and abilities.",
    metaDescription:
      "Recognise stroke fast using FACE-ARM-SPEECH-TIME. Nigerian guide to stroke symptoms, causes, urgent action, treatment, recovery and prevention.",
    readingTimeMinutes: 8,
    urgency: "emergency",
    overview: [
      "A stroke happens when the blood supply to part of the brain is interrupted, so brain cells are starved of oxygen and begin to die. It is a medical emergency.",
      "Most strokes are ischaemic, caused by a clot blocking a blood vessel. Others are haemorrhagic, caused by bleeding in or around the brain. A brief, warning-type episode with symptoms that resolve is a transient ischaemic attack (TIA) — it must still be treated as an emergency.",
      "The single most important message is speed. The faster a person reaches hospital, the more brain can be saved and the better the chance of recovery.",
    ],
    symptoms: {
      common: [
        "Sudden weakness or numbness of the face, arm or leg — usually on one side",
        "Sudden difficulty speaking or understanding speech",
        "Sudden confusion",
        "Sudden trouble seeing in one or both eyes",
        "Sudden severe headache with no known cause",
        "Sudden difficulty walking, dizziness or loss of balance",
      ],
      warning: [
        "Face drooping on one side",
        "Arm or leg weakness on one side",
        "Slurred or jumbled speech",
        "Any of the above appearing suddenly — even briefly",
      ],
    },
    causes: [
      "Ischaemic stroke is caused by a clot blocking blood flow to the brain.",
      "Haemorrhagic stroke is caused by a blood vessel bursting and bleeding into or around the brain, often linked to very high blood pressure.",
      "Uncontrolled high blood pressure is the leading risk factor for both.",
    ],
    riskFactors: [
      "High blood pressure (the most important risk factor)",
      "Diabetes",
      "Smoking and heavy alcohol use",
      "Irregular heartbeat (atrial fibrillation)",
      "High cholesterol and heart disease",
      "Previous stroke or TIA",
      "Sickle cell disease",
    ],
    diagnosis: [
      "Stroke is diagnosed urgently in hospital using a brain scan (usually a CT scan) to tell whether it is a clot or a bleed — because the treatments are very different.",
      "Blood tests, blood pressure, heart rhythm checks and other scans help find the cause.",
    ],
    treatment: {
      lifestyle: [
        "After a stroke, rehabilitation — physiotherapy, speech and occupational therapy — supports recovery",
        "Controlling blood pressure, diabetes and other risks prevents another stroke",
      ],
      medical: [
        "Clot-type (ischaemic) strokes may be treated with clot-busting medicine or clot-removal procedures — but only within a limited time window, which is why arriving early is critical.",
        "Bleeding (haemorrhagic) strokes need different management, sometimes surgery.",
        "Long-term treatment usually includes medicines to lower the risk of another stroke.",
      ],
    },
    prevention: [
      "Control blood pressure — this is the most powerful prevention",
      "Manage diabetes and cholesterol",
      "Stop smoking and limit alcohol",
      "Stay active and maintain a healthy weight",
      "Take prescribed medicines for heart rhythm problems or previous stroke",
    ],
    complications: [
      "Weakness or paralysis, often on one side",
      "Difficulty with speech, swallowing or vision",
      "Memory, thinking and emotional changes",
      "Disability requiring ongoing support and rehabilitation",
    ],
    urgentCare: [
      "Use FAST. FACE — has it drooped on one side? ARM — can both arms be raised and held? SPEECH — is it slurred or jumbled? TIME — if you see any of these signs, it is time to get to hospital immediately.",
      "Do not wait to see if symptoms pass, do not give food or drink, and do not treat at home. Go to the nearest hospital with emergency and scanning capacity straight away.",
    ],
    nigerianContext: [
      "Stroke is a major cause of death and long-term disability in Nigeria, strongly linked to undiagnosed and poorly controlled high blood pressure.",
      "Many people reach hospital too late for the most effective treatments, sometimes after first seeking care from non-medical sources. Knowing FAST and acting at once changes outcomes.",
      "Access to brain scans and stroke-ready hospitals varies by location. Knowing in advance which nearby facility can handle emergencies and scanning is valuable for every family.",
      "Controlling blood pressure is the most effective and affordable way to prevent stroke — check it regularly and treat it consistently.",
    ],
    questionsForDoctor: [
      "Was my stroke caused by a clot or a bleed?",
      "What is my blood pressure target, and which medicines prevent another stroke?",
      "What rehabilitation is available to me, and how do I access it?",
      "What warning signs mean I should call for emergency help again?",
    ],
    faqs: [
      {
        question: "What does FAST mean?",
        answer:
          "Face drooping, Arm weakness, Speech difficulty, Time to get to hospital. It is a simple way to recognise a stroke and act fast.",
      },
      {
        question: "The symptoms went away — is it still serious?",
        answer:
          "Yes. Symptoms that resolve may be a transient ischaemic attack, a strong warning of a future stroke. It needs urgent medical assessment.",
      },
      {
        question: "Can young people have a stroke?",
        answer:
          "Yes. Although risk rises with age, stroke can occur at any age, including in people with sickle cell disease, very high blood pressure or heart conditions.",
      },
    ],
    sources: [
      { label: "Stroke / cardiovascular disease information", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/health-topics/cardiovascular-diseases" },
      { label: "World Stroke Organization public guidance", publisher: "World Stroke Organization" },
      { label: "National guidelines on non-communicable disease control", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    reviewer: { name: "Dr. I. Musa (placeholder)", credentials: "MBBS, FMCP", specialty: "Neurology" },
    lastReviewed: "2026-04-20",
    nextReview: "2027-04-20",
  },

  // ───────────────────────────────────────────────────────── KIDNEY DISEASE
  {
    slug: "kidney-disease",
    title: "Chronic Kidney Disease",
    category: "condition",
    specialtyCentre: "kidney-health",
    summary:
      "Gradual loss of kidney function, often silent for years. Linked closely to high blood pressure and diabetes, and preventable when caught early.",
    metaDescription:
      "Nigerian patient guide to chronic kidney disease: causes, symptoms, diagnosis, treatment, prevention, complications and when care is urgent.",
    readingTimeMinutes: 9,
    urgency: "see-doctor",
    overview: [
      "The kidneys filter waste and excess fluid from the blood, balance salts, support healthy blood pressure and help produce red blood cells. Chronic kidney disease (CKD) means the kidneys are gradually losing this ability over months or years.",
      "Early CKD usually causes no symptoms, so it is often discovered through routine tests or while managing another condition such as diabetes or high blood pressure. Detected early, its progression can often be slowed.",
      "When kidney function falls very low (kidney failure), treatment such as dialysis or a transplant may become necessary — which is why prevention and early detection matter so much.",
    ],
    symptoms: {
      common: [
        "Often none in the early stages",
        "Tiredness and reduced energy",
        "Swelling of the legs, ankles or face",
        "Changes in urination — more at night, foamy urine, or less than usual",
        "Poor appetite, nausea or difficulty sleeping",
        "Itchy skin",
      ],
      warning: [
        "Very little or no urine",
        "Severe breathlessness from fluid build-up",
        "Confusion or drowsiness",
        "Chest pain",
      ],
    },
    causes: [
      "Diabetes and high blood pressure are the two most common causes worldwide and in Nigeria.",
      "Other causes include certain kidney inflammations, repeated infections, obstruction (such as stones or an enlarged prostate), and inherited conditions.",
      "Long-term, unsupervised use of some painkillers and unverified herbal remedies can also harm the kidneys.",
    ],
    riskFactors: [
      "Diabetes",
      "High blood pressure",
      "Family history of kidney disease",
      "Older age",
      "Recurrent urinary infections or kidney stones",
      "Frequent use of certain painkillers or unverified herbal products",
      "Sickle cell disease",
    ],
    diagnosis: [
      "CKD is detected with simple tests: a blood test for creatinine (used to estimate filtration, the eGFR) and a urine test for protein or blood.",
      "Blood pressure, blood sugar and an ultrasound scan of the kidneys help find the cause and stage.",
      "Because early disease is silent, people with diabetes or high blood pressure should have their kidneys checked regularly.",
    ],
    treatment: {
      lifestyle: [
        "Control blood pressure and blood sugar tightly",
        "Reduce salt and follow any dietary advice from your clinician or dietitian",
        "Stay well hydrated unless told otherwise, and avoid unnecessary painkillers and unverified herbal products",
        "Stop smoking and maintain a healthy weight",
      ],
      medical: [
        "Treating the underlying cause — especially blood pressure and diabetes — is central to slowing CKD.",
        "Specific medicines can protect the kidneys and manage complications such as anaemia and bone changes.",
        "In advanced kidney failure, dialysis or kidney transplant replaces lost function. Early planning gives the best options.",
      ],
    },
    prevention: [
      "Keep blood pressure and blood sugar well controlled",
      "Have kidney function checked if you have diabetes, hypertension or a family history",
      "Avoid long-term, unsupervised use of painkillers and unverified herbal remedies",
      "Treat urinary infections promptly and stay hydrated",
    ],
    complications: [
      "High blood pressure that is harder to control",
      "Anaemia and weak bones",
      "Fluid overload and heart disease",
      "Kidney failure requiring dialysis or transplant",
    ],
    urgentCare: [
      "Seek emergency care for severe breathlessness, chest pain, confusion, passing very little or no urine, or severe swelling — these may signal dangerous fluid or waste build-up.",
      "Sudden, sharp falls in urine output with vomiting or drowsiness need prompt assessment.",
    ],
    nigerianContext: [
      "Kidney disease is increasingly common in Nigeria and is often found late, when function is already severely reduced.",
      "Dialysis is expensive and not evenly available, and transplant access is limited. This makes early detection and control of blood pressure and diabetes especially important — prevention is far more achievable than late treatment.",
      "Long-term use of over-the-counter painkillers and unregulated herbal mixtures is a recognised and avoidable cause of kidney harm. Use medicines under professional guidance.",
      "If you live with diabetes or high blood pressure, ask specifically for a kidney check (creatinine/eGFR and a urine test) — it is simple and may not be done unless requested.",
    ],
    questionsForDoctor: [
      "What is my eGFR and urine protein result, and what stage is my kidney function?",
      "What is the cause in my case, and how can we slow it down?",
      "Which medicines or substances should I avoid to protect my kidneys?",
      "What blood pressure and blood sugar targets should I aim for?",
      "What are the signs that my condition is worsening?",
    ],
    faqs: [
      {
        question: "Can kidney disease be reversed?",
        answer:
          "Established chronic kidney disease usually cannot be fully reversed, but its progression can often be slowed significantly — sometimes for many years — by controlling the cause and protecting the kidneys.",
      },
      {
        question: "Will I definitely need dialysis?",
        answer:
          "No. Many people with CKD never reach that stage, especially when it is found early and managed well. Dialysis is for advanced kidney failure.",
      },
      {
        question: "Are herbal remedies safe for the kidneys?",
        answer:
          "Many unverified herbal products can harm the kidneys, particularly with long-term use. Discuss anything you take with a qualified professional.",
      },
    ],
    sources: [
      { label: "Chronic kidney disease information", publisher: "World Health Organization", year: 2023 },
      { label: "KDIGO clinical practice guidance", publisher: "Kidney Disease: Improving Global Outcomes" },
      { label: "National guidelines on non-communicable disease control", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    reviewer: { name: "Dr. O. Eze (placeholder)", credentials: "MBBS, FWACP", specialty: "Nephrology" },
    lastReviewed: "2026-03-15",
    nextReview: "2027-03-15",
  },

  // ──────────────────────────────────────────────────── PREGNANCY DANGER SIGNS
  {
    slug: "pregnancy-danger-signs",
    title: "Pregnancy Danger Signs",
    category: "condition",
    specialtyCentre: "maternal-health",
    summary:
      "Warning signs in pregnancy that need urgent care. Knowing them — and acting fast — protects both mother and baby.",
    metaDescription:
      "Nigerian guide to pregnancy danger signs: bleeding, severe headache, convulsions, fever, reduced baby movement and more — and when to seek urgent care.",
    readingTimeMinutes: 7,
    urgency: "emergency",
    overview: [
      "Most pregnancies progress safely, but certain warning signs mean something may be seriously wrong and need urgent medical attention — sometimes within hours. Recognising them early can be the difference between a good outcome and a tragedy.",
      "This guide is for awareness and quick action. It does not replace antenatal care, where a midwife or doctor monitors the pregnancy, checks blood pressure, treats anaemia, and prepares for a safe birth.",
      "If you are unsure whether a symptom is serious, treat it as urgent and seek care. It is always better to be checked and reassured.",
    ],
    symptoms: {
      common: [
        "Some discomfort, mild swelling of the feet and tiredness can be normal in pregnancy",
        "Antenatal visits are the time to raise anything that worries you",
      ],
      warning: [
        "Vaginal bleeding at any stage of pregnancy",
        "Severe headache, or blurred or disturbed vision",
        "Convulsions (fits)",
        "Fever",
        "Severe abdominal (tummy) pain",
        "Reduced or absent baby movements",
        "Swelling of the face and hands",
        "Fluid leaking from the vagina before labour, or a foul-smelling discharge",
        "Difficulty breathing, fast heartbeat, or severe weakness",
      ],
    },
    causes: [
      "Danger signs can arise from conditions such as pre-eclampsia and eclampsia (linked to high blood pressure in pregnancy), bleeding from the placenta, infection, anaemia, or problems with the baby.",
      "Some develop suddenly even in a pregnancy that seemed to be going well, which is why awareness matters for everyone.",
    ],
    riskFactors: [
      "High blood pressure or diabetes before or during pregnancy",
      "Anaemia",
      "First pregnancy or pregnancy at an older age",
      "Previous pregnancy complications",
      "Carrying twins or more",
      "Infections, including untreated malaria",
    ],
    diagnosis: [
      "Danger signs are assessed urgently by a midwife or doctor, who checks blood pressure, the baby, and runs tests such as urine, blood and ultrasound as needed.",
      "Regular antenatal visits screen for many of these problems early — for example raised blood pressure or anaemia — before they become emergencies.",
    ],
    treatment: {
      lifestyle: [
        "Attend all antenatal appointments and take recommended supplements and malaria prevention",
        "Have a birth plan, including how and where you will get to a facility quickly",
        "Know the danger signs and share them with whoever supports you",
      ],
      medical: [
        "Treatment depends on the cause and is provided urgently in a health facility — for example managing high blood pressure, controlling bleeding, treating infection or delivering the baby when necessary.",
        "Pre-eclampsia, eclampsia and heavy bleeding are medical emergencies treated by skilled birth attendants.",
      ],
    },
    prevention: [
      "Attend antenatal care early and regularly",
      "Treat anaemia, high blood pressure and infections during pregnancy",
      "Use malaria prevention as advised in pregnancy",
      "Plan for a skilled birth attendant and rapid transport to a facility",
    ],
    complications: [
      "Eclampsia (seizures) and organ damage from severe pre-eclampsia",
      "Severe blood loss",
      "Serious infection",
      "Harm to the baby, including stillbirth, if danger signs are not acted on quickly",
    ],
    urgentCare: [
      "Go to a health facility immediately for any of these: vaginal bleeding, severe or persistent headache, blurred vision, convulsions, fever, severe abdominal pain, reduced or absent baby movements, swelling of the face and hands, or fluid/foul discharge leaking from the vagina.",
      "Do not wait for the next antenatal visit and do not rely on home remedies for these signs. If a woman is convulsing or bleeding heavily, this is a life-threatening emergency — get skilled help without delay.",
    ],
    nigerianContext: [
      "Nigeria has one of the highest rates of maternal death in the world, and many of these deaths are preventable with early recognition of danger signs and timely skilled care.",
      "Delays cost lives — delay in recognising a problem, delay in deciding to seek care, and delay in reaching a facility. Knowing the danger signs and planning transport in advance addresses the first two.",
      "Decisions in pregnancy are often shared across the family. It helps when partners, mothers and in-laws also know the danger signs, so care is not delayed by waiting for permission.",
      "Skilled antenatal and delivery care, insecticide-treated nets, and treatment of anaemia are widely promoted through clinics; attending early and regularly makes emergencies less likely.",
    ],
    questionsForDoctor: [
      "What are my blood pressure and blood count, and are they safe?",
      "Which specific danger signs should make me come in immediately?",
      "Where should I plan to deliver, and what is my transport plan in an emergency?",
      "Do I need malaria prevention, iron or other supplements?",
    ],
    faqs: [
      {
        question: "Is some swelling in pregnancy normal?",
        answer:
          "Mild swelling of the feet and ankles is common. Sudden swelling of the face and hands, especially with headache or vision changes, can signal pre-eclampsia and needs urgent assessment.",
      },
      {
        question: "What if I am not sure a symptom is serious?",
        answer:
          "Treat it as urgent and get checked. With danger signs in pregnancy, acting early is always safer than waiting.",
      },
      {
        question: "Does attending antenatal care really make a difference?",
        answer:
          "Yes. Regular antenatal care finds and treats many problems early and prepares for a safe birth, which significantly reduces risk to mother and baby.",
      },
    ],
    sources: [
      { label: "Maternal health and danger signs in pregnancy", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/health-topics/maternal-health" },
      { label: "Maternal mortality fact sheet", publisher: "World Health Organization", year: 2023 },
      { label: "National guidelines for maternal and newborn care", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    reviewer: { name: "Dr. H. Yakubu (placeholder)", credentials: "MBBS, FWACS", specialty: "Obstetrics & Gynaecology" },
    lastReviewed: "2026-05-10",
    nextReview: "2027-05-10",
  },
];

// ────────────────────────────────────────────────────────────── query helpers

export function getAllConditions(): HealthArticle[] {
  return conditions;
}

export function getConditionSlugs(): string[] {
  return conditions.map((c) => c.slug);
}

export function getConditionBySlug(slug: string): HealthArticle | undefined {
  return conditions.find((c) => c.slug === slug);
}

export function getConditionsByCentre(centreSlug: string): HealthArticle[] {
  return conditions.filter((c) => c.specialtyCentre === centreSlug);
}
