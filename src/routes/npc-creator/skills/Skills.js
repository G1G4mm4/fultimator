const skills = {};

function calcSkillsMax(npc) {
  return calcSkillsMaxType(npc) + calcSkillsMaxVulnerabilities(npc);
}

function calcSkillsMaxType(npc) {
  let number = 4;

  if (
    npc.type === "Costrutto" ||
    npc.type === "Elementale" ||
    npc.type === "Non Morto"
  ) {
    number = 2;
  }

  if (
    npc.type === "Demone" ||
    npc.type === "Pianta" ||
    npc.type === "Umanoide"
  ) {
    number = 3;
  }

  return number;
}

function calcSkillsMaxVulnerabilities(npc) {
  let sum = 0;
  Object.entries(npc.vulnerabilities).forEach((el) => {
    if (el[1]) {
      sum++;
    }
  });
  return sum;
}

function calcSkillsCurrent(npc) {
  return npc.skills.length + calcSkillsCurrentAttacks(npc);
}

function calcSkillsCurrentAttacks(npc) {
  let sum = 0;
  npc.attacks.forEach((attack) => {
    sum += attack.effects.length;
  });

  return sum;
}

export {
  skills,
  calcSkillsMax,
  calcSkillsMaxType,
  calcSkillsMaxVulnerabilities,
  calcSkillsCurrent,
  calcSkillsCurrentAttacks,
};