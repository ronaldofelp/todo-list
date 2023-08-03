export const date = new Date();
const dayWeek = document.querySelector(".day-week");
const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto","setembro", "outubro", "novembro", "dezembro"]

dayWeek.innerText = `${dayName[date.getDay()]}, ${date.getDate()} ${monName[date.getMonth()- 1]} de ${date.getFullYear()}`