import axios from 'axios';

// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'https://hamzayali1.pythonanywhere.com';
export class APIService {
 constructor() {
 }
 getSkill(param_pk) {
   const url = `${API_URL}/api/skills/${param_pk}`;
   return axios.get(url);
 }
 getSkillList() {
   const url = `${API_URL}/api/skills`;
   return axios.get(url);
 }
 addNewSkill(skill){
   const url = `${API_URL}/api/skills/`;
   return axios.post(url, skill);
 }
 updateSkill(skill){
   const url = `${API_URL}/api/skills/${skill.id}`;
   return axios.put(url, skill);
 }
 deleteSkill(skill_id){
   const url = `${API_URL}/api/skills/${skill_id}`;
   return axios.delete(url);
 }
}