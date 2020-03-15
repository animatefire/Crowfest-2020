const facebook =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>';
const twitter =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/></svg>';
const website =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802zm-6.401-16l6 4.674-2.538.427 1.538 3.095-1.571.804-1.546-3.157-1.883 1.759v-7.602z"/></svg>';
const youtube =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.888 14.154c-.288 0-.535.184-.717.405v-1.893h-.814v5.88h.814v-.333c.225.28.471.388.766.388.537 0 .737-.417.737-.954v-2.406c0-.588-.195-1.087-.786-1.087zm-.044 3.376c0 .138-.023.238-.07.299-.089.116-.281.111-.413.045l-.191-.153v-2.703l.167-.132c.141-.071.323-.058.421.071.058.076.086.187.086.333v2.24zm-2.716-8.53v-2.119c0-.25.115-.434.353-.434.26 0 .371.179.371.434v2.119c0 .248-.126.431-.354.431-.235 0-.37-.191-.37-.431zm-1.849 4.52h-.94v5.027h-.908v-5.027h-.94v-.854h2.788v.854zm1.484.688h.807v4.338h-.807v-.479c-.148.176-.303.311-.464.403-.435.249-1.031.244-1.031-.636v-3.626h.806v3.325c0 .175.042.292.215.292.157 0 .376-.202.474-.325v-3.292zm-10.763-14.208v24h24v-24h-24zm13.434 5.62h.847v3.491c0 .184.044.307.226.307.165 0 .395-.212.498-.341v-3.457h.847v4.555h-.847v-.504c-.367.436-.723.569-.979.569-.454 0-.591-.364-.591-.813v-3.807zm-1.937-.038c.687 0 1.217.511 1.217 1.224v2.233c0 .765-.536 1.22-1.217 1.22-.821 0-1.241-.417-1.241-1.22v-2.233c0-.731.495-1.224 1.241-1.224zm-3.435-1.582l.658 2.468.611-2.468h.969l-1.11 3.67v2.504h-.954v-2.504l-1.134-3.67h.96zm8.493 15.912c-1.735.118-7.377.118-9.11 0-1.878-.128-2.097-1.267-2.111-4.245.014-2.983.235-4.116 2.111-4.245 1.733-.118 7.375-.118 9.11 0 1.878.128 2.097 1.267 2.111 4.245-.014 2.983-.235 4.116-2.111 4.245zm-.047-5.813c-.728 0-1.225.522-1.225 1.275v1.947c0 .781.394 1.342 1.164 1.342.85 0 1.208-.506 1.208-1.342v-.326h-.83v.301c0 .378-.02.607-.36.607-.325 0-.352-.282-.352-.607v-.818h1.542v-1.104c0-.783-.373-1.275-1.147-1.275zm.317 1.707h-.712v-.439c0-.298.062-.508.36-.508.29 0 .352.215.352.508v.439z"/></svg>';
const instagram =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.667 5.823v1.687c0 .271-.222.49-.497.49h-1.674c-.274 0-.496-.219-.496-.49v-1.687c0-.271.222-.49.496-.49h1.674c.275 0 .497.219.497.49zm5.333-5.823v24h-24v-24h24zm-4 10h-4.518c.362.609.581 1.313.581 2.073 0 2.249-1.824 4.073-4.073 4.073-2.25 0-4.073-1.824-4.073-4.073 0-.76.219-1.464.581-2.073h-4.498v6.852c0 1.738 1.451 3.148 3.19 3.148h9.662c1.738 0 3.148-1.41 3.148-3.148v-6.852zm-8.01 5.21c1.73 0 3.137-1.408 3.137-3.138 0-.939-.416-1.783-1.071-2.358-.23-.202-.49-.371-.772-.499-.395-.18-.833-.28-1.294-.28-.462 0-.899.101-1.294.28-.282.128-.542.297-.771.499-.656.575-1.072 1.419-1.072 2.358-.001 1.731 1.407 3.138 3.137 3.138zm8.01-8.062c0-1.738-1.41-3.148-3.148-3.148h-8.185v3.333h-.667v-3.333h-.667v3.333h-.666v-3.282c-.231.038-.455.095-.667.18v3.103h-.667v-2.735c-.801.571-1.333 1.497-1.333 2.549v2.186h4.982c.778-.855 1.866-1.334 3.008-1.334 1.148 0 2.233.483 3.007 1.333h5.003v-2.185zm-8 7.244c1.281 0 2.319-1.038 2.319-2.319s-1.038-2.319-2.319-2.319-2.319 1.038-2.319 2.319 1.038 2.319 2.319 2.319z"/></svg>';
const music =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z"/></svg>';
const spotify =
  '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 0v24h-24v-24h24zm-12 4c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8s8-3.581 8-8c0-4.418-3.582-8-8-8zm3.669 11.539c-.144.236-.451.31-.686.166-1.878-1.148-4.243-1.408-7.028-.772-.268.062-.535-.106-.597-.375-.061-.268.106-.535.375-.596 3.048-.697 5.662-.397 7.771.891.235.144.309.451.165.686zm.979-2.178c-.181.293-.565.385-.858.205-2.15-1.322-5.428-1.704-7.972-.932-.33.099-.678-.087-.778-.416-.1-.33.086-.677.416-.778 2.905-.881 6.517-.454 8.987 1.063.293.181.385.565.205.858zm.084-2.269c-2.578-1.531-6.832-1.672-9.294-.925-.395.12-.813-.103-.933-.498-.12-.396.103-.814.499-.934 2.826-.858 7.523-.692 10.492 1.07.356.211.472.671.262 1.026-.211.355-.671.472-1.026.261z"/></svg>';

const social = {
  facebook,
  twitter,
  website,
  youtube,
  instagram,
  music,
  spotify
};

export default social;
