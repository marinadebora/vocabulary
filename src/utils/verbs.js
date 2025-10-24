 const irregularVerbs = [
  { word: "BE", translation: "SER / ESTAR" },
  { word: "HAVE", translation: "TENER" },
  { word: "CAN", translation: "PODER" },
  { word: "DO", translation: "HACER" },
  { word: "GO", translation: "IR" },
  { word: "FEEL", translation: "SENTIR" },
  { word: "FALL", translation: "CAER" },
  { word: "DRIVE", translation: "CONDUCIR" },
  { word: "CUT", translation: "CORTAR" },
  { word: "FIND", translation: "ENCONTRAR" },
  { word: "HEAR", translation: "OIR" },
  { word: "GIVE", translation: "DAR" },
  { word: "COME", translation: "VENIR" },
  { word: "HURT", translation: "HERIR" },
  { word: "FIGHT", translation: "LUCHAR" },
  { word: "BEAT", translation: "BATIR" },
  { word: "FREEZE", translation: "CONGELAR" },
  { word: "DIG", translation: "CAVAR" },
  { word: "CATCH", translation: "ATRAPAR" },
  { word: "DRAW", translation: "DIBUJAR" },
  { word: "HANG", translation: "COLGAR" },
  { word: "EAT", translation: "COMER" },
  { word: "BEGIN", translation: "EMPEZAR" },
  { word: "BET", translation: "APOSTAR" },
  { word: "BLEED", translation: "SANGRAR" },
  { word: "DREAM", translation: "SOÑAR" },
  { word: "GROW", translation: "CRECER" },
  { word: "HIT", translation: "GOLPEAR / PEGAR" },
  { word: "FEED", translation: "ALIMENTAR" },
  { word: "DRINK", translation: "BEBER" },
  { word: "FORGET", translation: "OLVIDAR" },
  { word: "FEEL", translation: "SENTIR" },
  { word: "KEEP", translation: "GUARDAR" },
  { word: "BREAK", translation: "ROMPER" },
  { word: "BUY", translation: "COMPRAR" },
  { word: "CHOOSE", translation: "ELEGIR" },
  { word: "FORGIVE", translation: "PERDONAR" },
  { word: "BRING", translation: "TRAER" },
  { word: "BITE", translation: "MORDER" },
  { word: "BURN", translation: "QUEMAR" },
  { word: "BECOME", translation: "LLEGAR A SER / CONVERTIRSE" },
  { word: "FLY", translation: "VOLAR" },
  { word: "KNOW", translation: "SABER" },
  { word: "HOLD", translation: "SUJETAR" },
  { word: "GET", translation: "CONSEGUIR" },
  { word: "BLOW", translation: "SOPLAR / EXPLOTAR" },
  { word: "COST", translation: "COSTAR" },
  { word: "BEND", translation: "DOBLAR" },
  { word: "BUILD", translation: "CONSTRUIR" },
  { word: "FALL", translation: "CAERSE" },
  { word: "FEED", translation: "ALIMENTAR" },
  { word: "SET", translation: "PREPARAR" },
  { word: "SEW", translation: "COSER" },
  { word: "SAY", translation: "DECIR" },
  { word: "SEE", translation: "VER" },
  { word: "WRITE", translation: "ESCRIBIR" },
  { word: "THROW", translation: "TIRAR / LANZAR" },
  { word: "UNDERSTAND", translation: "ENTENDER" },
  { word: "SHOW", translation: "MOSTRAR" },
  { word: "KEEP", translation: "MANTENER" },
  { word: "SPEND", translation: "GASTAR" },
  { word: "LEAVE", translation: "DEJAR ALGO / IRSE" },
  { word: "SPLIT", translation: "DIVIDIR" },
  { word: "KNOW", translation: "SABER" },
  { word: "STEAL", translation: "ROBAR" },
  { word: "BEGIN", translation: "EMPEZAR" },
  { word: "SHINE", translation: "BRILLAR" },
  { word: "SIT", translation: "SENTARSE" },
  { word: "SLIDE", translation: "DESLIZAR" },
  { word: "SPIT", translation: "ESCUPIR" },
  { word: "CHOOSE", translation: "ELEGIR" },
  { word: "LET", translation: "PERMITIR" },
  { word: "STAND", translation: "PARARSE" },
  { word: "LIE", translation: "ACOSTARSE" },
  { word: "STINK", translation: "APESTAR" },
  { word: "LIGHT", translation: "ILUMINAR / ENCENDER" },
  { word: "LOSE", translation: "PERDER" },
  { word: "MAKE", translation: "HACER" },
  { word: "RUN", translation: "CORRER" },
  { word: "TEAR", translation: "LAGRIMEAR" },
  { word: "TELL", translation: "DECIR" },
  { word: "THINK", translation: "PENSAR" },
  { word: "SEND", translation: "ENVIAR" },
  { word: "PUT", translation: "PONER" },
  { word: "PAY", translation: "PAGAR" },
  { word: "MEET", translation: "ENCONTRARSE" },
  { word: "HIDE", translation: "ESCONDER" },
  { word: "SHOOT", translation: "DISPARAR" },
  { word: "SHRINK", translation: "ENCOGER" },
  { word: "SHUT", translation: "CERRAR" },
  { word: "SING", translation: "CANTAR" },
  { word: "SINK", translation: "HUNDIR" },
  { word: "SLEEP", translation: "DORMIR" },
  { word: "HOLD", translation: "CERRAR" },
  { word: "BROADCAST", translation: "TRASMITIR" },
  { word: "SPEAK", translation: "HABLAR" },
  { word: "KNEEL", translation: "ARRODILLARSE" },
  { word: "BURST", translation: "ESTALLAR / REVENTAR" },
  { word: "LAY", translation: "PONER" },
  { word: "LEAD", translation: "DIRIGIR" },
  { word: "SPRING", translation: "BROTAR" },
  { word: "LEND", translation: "PRESTAR" },
  { word: "CREEP", translation: "ARRASTRARSE" },
  { word: "STICK", translation: "PEGAR" },
  { word: "STING", translation: "PICAR" },
  { word: "DEAL", translation: "NEGOCIAR" },
  { word: "STRIKE", translation: "ATACAR" },
  { word: "MEAN", translation: "QUERER DECIR / SUPONER" },
  { word: "SWEAR", translation: "JURAR" },
  { word: "SWEEP", translation: "BARRER" },
  { word: "SWIM", translation: "NADAR" },
  { word: "SWING", translation: "BALANCEARSE" },
  { word: "PUT", translation: "BARRER" },
  { word: "READ", translation: "LEER" },
  { word: "TAKE", translation: "LLEVAR" },
  { word: "TEACH", translation: "ENSEÑAR" },
  { word: "RISE", translation: "ELEVAR" },
  { word: "FLEE", translation: "HUIR" },
  { word: "SEEK", translation: "BUSCAR" },
  { word: "WEAR", translation: "VESTIR / LLEVAR PUESTO" },
  { word: "FORBID", translation: "PROHIBIR" },
  { word: "WEEP", translation: "LLORAR" },
  { word: "SHAKE", translation: "SACUDIR" },
]

 const regularVerbs = [
  { word: "LIKE", translation: "GUSTAR" },
  { word: "TALK", translation: "HABLAR" },
  { word: "PLAY", translation: "JUGAR" },
  { word: "CALL", translation: "LLAMAR" },
  { word: "OPEN", translation: "ABRIR" },
  { word: "ACT", translation: "ACTUAR" },
  { word: "THANK", translation: "AGRADECER" },
  { word: "PARK", translation: "APARCAR" },
  { word: "PASS", translation: "APROVAR" },
  { word: "HELP", translation: "AYUDAR" },
  { word: "DANCE", translation: "BAILAR" },
  { word: "KISS", translation: "BESAR" },
  { word: "CHANGE", translation: "CAMBIAR" },
  { word: "WALK", translation: "CAMINAR" },
  { word: "MARRY", translation: "CASARSE" },
  { word: "CLOSE", translation: "CERRAR" },
  { word: "COOK", translation: "COCINAR" },
  { word: "COPY", translation: "COPIAR" },
  { word: "BELIVE", translation: "CREER" },
  { word: "SPEL", translation: "DELETREAR" },
  { word: "HOPE", translation: "DESEAR" },
  { word: "WISH", translation: "DESEAR" },
  { word: "STOP", translation: "DETENER" },
  { word: "ENJOY", translation: "DISFRUTAR" },
  { word: "WAIT", translation: "ESPERAR" },
  { word: "STUDY", translation: "ESTUDIAR" },
  { word: "EXPLAIN", translation: "EXPLICAR" },
  { word: "MISS", translation: "EXTRAÑAR" },
  { word: "SIGN", translation: "FIRMAR" },
  { word: "SMOKE", translation: "FUMAR" },
  { word: "IMAGINE", translation: "IMAGINAR" },
  { word: "TRY", translation: "INTENTAR" },
  { word: "PLAY", translation: "JUGAR" },
  { word: "WASH", translation: "LAVAR" },
  { word: "CLEAN", translation: "LIMPIAR" },
  { word: "ARRIVE", translation: "LLEGAR" },
  { word: "CRY", translation: "LLORAR" },
  { word: "RAIN", translation: "LLOVER" },
  { word: "KILL", translation: "MATAR" },
  { word: "LOOK", translation: "MIRAR" },
  { word: "DIE", translation: "MORIR" },
  { word: "WATCH", translation: "OBSERVAR / VER" },
  { word: "STAY", translation: "PERMANECER" },
  { word: "PREFER", translation: "PREFERIR" },
  { word: "ASK", translation: "PREGUNTAR" },
  { word: "WANT", translation: "QUERER" },
  { word: "REMEMBER", translation: "RECORDAR" },
  { word: "LAUGH", translation: "REIR" },
  { word: "REPEAT", translation: "REPETIR" },
  { word: "BREATHE", translation: "RESPIRAR" },
  { word: "REMEMBER", translation: "RECORDAR" },
  { word: "ANSWER", translation: "RESPONDER" },
  { word: "DRY", translation: "SECAR" },
  { word: "FOLLOW", translation: "SEGUIR" },
  { word: "SMILE", translation: "SONREIR" },
  { word: "HAPPEN", translation: "SUCEDER" },
  { word: "FINISH", translation: "TERMINAR" },
  { word: "TOUCH", translation: "TOCAR" },
  { word: "WORK", translation: "TRABAJAR" },
  { word: "USE", translation: "USAR" },
  { word: "DRESS", translation: "VESTIR" },
  { word: "VISIT", translation: "VISITAR" },
  { word: "GUESS", translation: "ADIVINAR" },
  { word: "MANAGE", translation: "ADMINISTRAR" },
  { word: "ADD", translation: "AÑADIR / SUMAR" },
  { word: "APPEAR", translation: "APARECER" },
  { word: "FILE", translation: "ARCHIVAAR" },
  { word: "FIX", translation: "ARREGLAR ALGO" },
  { word: "FIX", translation: "ARREGLAR" },
  { word: "ARREST", translation: "ARRESTAR" },
  { word: "ASSURE", translation: "ASEGURAR" },
  { word: "ASSIST", translation: "ASISTIR" },
  { word: "ATTACK", translation: "ATACAR" },
  { word: "TIE", translation: "ATAR" },
  { word: "ADVANCE", translation: "AVANZAR" },
  { word: "SEARCH", translation: "BUSCAR" },
  { word: "WARM", translation: "CALENTAR" },
  { word: "CHARGE", translation: "CARGAR" },
  { word: "PUNISH", translation: "CASTIGAR" },
  { word: "BRUSH", translation: "CEPILLAR" },
  { word: "CRASH", translation: "CHOCAR" },
  { word: "CASH", translation: "COBRAR" },
  { word: "COMBINE", translation: "COMBINAR" },
  { word: "START", translation: "COMENZAR" },
  { word: "COMMIT", translation: "COMPROMETERSE / COMETER" },
  { word: "COMPARE", translation: "COMPARAR" },
  { word: "PLEASE", translation: "COMPLACER" },
  { word: "COMPLETE", translation: "COMPLETAR" },
  { word: "COMPOSE", translation: "COMPONER" },
  { word: "BEHAVE", translation: "COMPORTARSE" },
  { word: "CHECK", translation: "COMPROBAR" },
  { word: "TRUST", translation: "CONFIAR" },
  { word: "COUNT", translation: "CONTAR" },
  { word: "CONTAIN", translation: "CONTENER" },
  { word: "CONTINUE", translation: "CONTINUE" },
  { word: "CROSS", translation: "CRUZAR" },
    { word: "CARE", translation: "CUIDAR" },
  { word: "DROP", translation: "DEJAR CAER" },
  { word: "DEVOTE", translation: "DEDICAR" },
  { word: "DENY", translation: "DENEGAR" },
   { word: "ADDRESS", translation: "DIRIGIRSE" },
  { word: "APOLOGIZE", translation: "DISCULPAR" },
  { word: "FIRE", translation: "DISPARAR" },
  { word: "PUSH", translation: "EMPUJAR" },
    { word: "DELIVER", translation: "ENTREGAR" },
  { word: "TRAIN", translation: "ENTRENAR" },
  { word: "AMUSE", translation: "ENTRETENER" },
  { word: "NUMBER", translation: "ENUMERAR" },
  { word: "AVOID", translation: "EVITAR" },
  { word: "EXCLAIM", translation: "EXCLAMAR" },
  { word: "EXPLAIN", translation: "EXPLICAR" },
  { word: "EXPRESS", translation: "EXPRESAR" },
    { word: "FAIL", translation: "FRACASAR" },
  { word: "FRY", translation: "FREIR" },
  { word: "JUDGE", translation: "JUZGAR" },
  { word: "RAISE", translation: "LEVANTAR" },
]

export default {
irregularVerbs,
regularVerbs
}
/* Llegar Arrive Arrived
Llenar Fill Filled
Llevar Carry Carried
Llevar a cabo Perform Performed
Llorar Cry Cried
Llover Rain Rained
Mandar Command Commanded
Mantener Maintain Maintained
Marcar Mark Marked
Masajear Massage Massaged
Matar Kill Killed
Medir Measure Measured
Mirar Look Looked
Molestar Annoy Annoyed
Morir Die Died
Mover Move Moved
Navegar Sail Sailed
Nombrar Name Named
Notar Note Noted
Notificar Notice Notice
Observar Observe Observed
Observar (ver) Watch Watched
Ofrecer Offer Offered
Ordenar Order Ordered
Permanecer Stay Stayed
Permitir Allow Allowed
Pertenecer Belong Belonged
Pesar Weigh Weighed
Pescar Fish Fished
Planificar Plan Planned
Practicar Practice Practiced
Preferir Prefer Prefered
Preguntar Ask Asked
Preocuparse Worry Worried
Preparar Prepare Prepared
Probar Taste Tasted
Prometer Promise Promised
Pronunciar Pronounce Pronounced
Querer Want Wanted
Rechazar Refuse Refused
Recibir Receive Received
Reclamar Claim Claimed
Recoger Pick Picked
Recolectar Collect Collected
Recordar Remember Remembered
Regar Water Watered
Registrar Register Registered
Reir Laugh Laughed
Reparar Repair Repaired
Repetir Repeat Repeated
Reportar Report Reported
Requerir Require Required
Reservar Reserve Reserved
Resolver Resolve Resolved
Respirar Breathe Breathed
Responder Answer Answered
Rezar Pray Prayed
Salvar Save Saved
Secar Dry Dried
Seguir Follow Followed
Servir Serve Served
Silbar Whistle Whistled
Solicitar Request Requested
Sonar Sound Sounded
Sonreír Smile Smiled
Sorprender Surprise Surprised
Suceder Happen Happened
Sufrir Suffer Suffered
Suplicar Beg Begged
Telefonear Phone Phoned
Terminar Finish Finished
Testear Test Tested
Tocar Touch Touched
Trabajar Work Worked
Traducir Translate Translated
Unir Unite United
Usar Use Used
Variar Vary Varied
Vestir Dress Dressed
Via
j
a
r
T
r
a
v
el T
r
a
v
ele
d
Visit
a
r
Visit
Visit
e
d */



