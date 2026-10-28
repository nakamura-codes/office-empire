(()=>{'use strict';
const $=id=>document.getElementById(id), accountsKey='office-empire-test-accounts-v1',sessionKey='office-empire-test-session-v1';
const modal=$('account-modal'),msg=$('account-message'),form=$('account-form');
const getAccounts=()=>{try{return JSON.parse(localStorage.getItem(accountsKey)||'{}')}catch{return {}}};
const getSession=()=>localStorage.getItem(sessionKey);
const user=()=> $('account-username').value.trim().toLowerCase();
const valid=()=>/^[a-z0-9_]{3,20}$/.test(user());
const loadGame=()=>{window.officeEmpireStorageKey='office-empire-test-save-'+(getSession()||'visitor');const script=document.createElement('script');script.src='game.js';document.body.appendChild(script)};
function updateUI(){const u=getSession();$('account-open').textContent=u?'👤 '+u:'👤 Conta';$('account-logout').classList.toggle('hidden',!u);form.classList.toggle('hidden',!!u);msg.textContent=u?'Conectado como '+u+'. Seu progresso é salvo apenas neste navegador.':'Entre ou crie uma conta local para testar. Cada usuário tem seu próprio save.';$('status').textContent=u?'💾 Salvo localmente: '+u:'💾 Visitante';}
$('account-open').onclick=()=>{updateUI();modal.classList.remove('hidden')};$('account-close').onclick=()=>modal.classList.add('hidden');
function authenticate(create){const u=user(),pass=$('account-password').value;if(!valid()){msg.textContent='Use 3 a 20 caracteres: letras, números e _.';return}if(pass.length<6){msg.textContent='A senha precisa ter pelo menos 6 caracteres.';return}const accounts=getAccounts();if(create){if(Object.hasOwn(accounts,u)){msg.textContent='Esse usuário já existe.';return}accounts[u]=pass;try{localStorage.setItem(accountsKey,JSON.stringify(accounts))}catch{msg.textContent='Não foi possível salvar a conta neste navegador.';return}}else if(!Object.hasOwn(accounts,u)||accounts[u]!==pass){msg.textContent='Usuário ou senha incorretos.';return}localStorage.setItem(sessionKey,u);location.reload()}
form.onsubmit=e=>{e.preventDefault();authenticate(false)};$('account-signup').onclick=()=>authenticate(true);$('account-logout').onclick=()=>{localStorage.removeItem(sessionKey);location.reload()};
updateUI();loadGame();
})();
