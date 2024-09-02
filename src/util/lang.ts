export type LanguageCode =
  | "Bulgarian"
  | "Danish"
  | "German"
  | "English"
  | "Spanish"
  | "French"
  | "Croatian"
  | "Italian"
  | "Norwegian"
  | "Polish"
  | "PortugueseBrazil"
  | "Portuguese"
  | "Slovenian"
  | "Serbian"
  | "Swedish"
  | "Turkish";

export type MenuOptions = {
  playback: string;
  shuffle: string;
  next: string;
  previous: string;
  play: string;
  pause: string;
  playNext: string;
  playPrevious: string;
  playRepeat: string;
  playRepeatOne: string;
};

export const getMenuOptionsByLanguage = (code: LanguageCode): MenuOptions => {
  switch (code) {
    case "Bulgarian":
      return {
        playback: "Възпроизвеждане",
        shuffle: "Случайна",
        next: "Следваща",
        previous: "Предишна",
        play: "Пусни",
        pause: "Пауза",
        playNext: "Пусни следващата песен",
        playPrevious: "Пусни предишната песен",
        playRepeat: "Повтаряне",
        playRepeatOne: "Повтаряй една песен",
      };
    case "Danish":
      return {
        playback: "Afspilning",
        shuffle: "Tilfældig",
        next: "Næste",
        previous: "Forrige",
        play: "Spil",
        pause: "Pause",
        playNext: "Spil næste sang",
        playPrevious: "Spil forrige sang",
        playRepeat: "Gentag",
        playRepeatOne: "Gentag en sang",
      };
    case "German":
      return {
        playback: "Wiedergabe",
        shuffle: "Zufallswiedergabe",
        next: "Weiter",
        previous: "Zurück",
        play: "Abspielen",
        pause: "Pause",
        playNext: "Nächsten Titel abspielen",
        playPrevious: "Vorherigen Titel abspielen",
        playRepeat: "Wiederholen",
        playRepeatOne: "Einen Titel wiederholen",
      };
    case "English":
      return {
        playback: "Playback",
        shuffle: "Shuffle",
        next: "Next",
        previous: "Previous",
        play: "Play",
        pause: "Pause",
        playNext: "Play Next Track",
        playPrevious: "Play Previous Track",
        playRepeat: "Repeat",
        playRepeatOne: "Repeat One",
      };
    case "Spanish":
      return {
        playback: "Reproducción",
        shuffle: "Aleatorio",
        next: "Siguiente",
        previous: "Anterior",
        play: "Reproducir",
        pause: "Pausa",
        playNext: "Reproducir siguiente pista",
        playPrevious: "Reproducir pista anterior",
        playRepeat: "Repetir",
        playRepeatOne: "Repetir una",
      };
    case "French":
      return {
        playback: "Lecture",
        shuffle: "Aléatoire",
        next: "Suivant",
        previous: "Précédent",
        play: "Lecture",
        pause: "Pause",
        playNext: "Lire le morceau suivant",
        playPrevious: "Lire le morceau précédent",
        playRepeat: "Répéter",
        playRepeatOne: "Répéter un morceau",
      };
    case "Croatian":
      return {
        playback: "Reprodukcija",
        shuffle: "Nasumično",
        next: "Sljedeće",
        previous: "Prethodno",
        play: "Reproduciraj",
        pause: "Pauza",
        playNext: "Reproduciraj sljedeću pjesmu",
        playPrevious: "Reproduciraj prethodnu pjesmu",
        playRepeat: "Ponovi",
        playRepeatOne: "Ponovi jednu pjesmu",
      };
    case "Italian":
      return {
        playback: "Riproduzione",
        shuffle: "Riproduzione casuale",
        next: "Avanti",
        previous: "Indietro",
        play: "Riproduci",
        pause: "Pausa",
        playNext: "Riproduci brano successivo",
        playPrevious: "Riproduci brano precedente",
        playRepeat: "Ripeti",
        playRepeatOne: "Ripeti un brano",
      };
    case "Norwegian":
      return {
        playback: "Avspilling",
        shuffle: "Tilfeldig rekkefølge",
        next: "Neste",
        previous: "Forrige",
        play: "Spill av",
        pause: "Pause",
        playNext: "Spill neste spor",
        playPrevious: "Spill forrige spor",
        playRepeat: "Gjenta",
        playRepeatOne: "Gjenta én",
      };
    case "Polish":
      return {
        playback: "Odtwarzanie",
        shuffle: "Losowo",
        next: "Następny",
        previous: "Poprzedni",
        play: "Odtwórz",
        pause: "Wstrzymaj",
        playNext: "Odtwórz następny utwór",
        playPrevious: "Odtwórz poprzedni utwór",
        playRepeat: "Powtórz",
        playRepeatOne: "Powtórz jeden",
      };
    case "PortugueseBrazil":
      return {
        playback: "Reprodução",
        shuffle: "Aleatório",
        next: "Próxima",
        previous: "Anterior",
        play: "Reproduzir",
        pause: "Pausar",
        playNext: "Reproduzir próxima faixa",
        playPrevious: "Reproduzir faixa anterior",
        playRepeat: "Repetir",
        playRepeatOne: "Repetir uma",
      };
    case "Portuguese":
      return {
        playback: "Reprodução",
        shuffle: "Aleatório",
        next: "Seguinte",
        previous: "Anterior",
        play: "Reproduzir",
        pause: "Pausa",
        playNext: "Reproduzir faixa seguinte",
        playPrevious: "Reproduzir faixa anterior",
        playRepeat: "Repetir",
        playRepeatOne: "Repetir uma",
      };
    case "Slovenian":
      return {
        playback: "Predvajanje",
        shuffle: "Naključno",
        next: "Naprej",
        previous: "Nazaj",
        play: "Predvajaj",
        pause: "Premor",
        playNext: "Predvajaj naslednjo skladbo",
        playPrevious: "Predvajaj prejšnjo skladbo",
        playRepeat: "Ponovi",
        playRepeatOne: "Ponovi eno",
      };
    case "Serbian":
      return {
        playback: "Reprodukcija",
        shuffle: "Nasumično",
        next: "Sledeća",
        previous: "Prethodna",
        play: "Pusti",
        pause: "Pauza",
        playNext: "Pusti sledeću pesmu",
        playPrevious: "Pusti prethodnu pesmu",
        playRepeat: "Ponovi",
        playRepeatOne: "Ponovi jednu",
      };
    case "Swedish":
      return {
        playback: "Uppspelning",
        shuffle: "Blanda",
        next: "Nästa",
        previous: "Föregående",
        play: "Spela",
        pause: "Pausa",
        playNext: "Spela nästa spår",
        playPrevious: "Spela föregående spår",
        playRepeat: "Upprepa",
        playRepeatOne: "Upprepa en",
      };
    case "Turkish":
      return {
        playback: "Oynatma",
        shuffle: "Karıştır",
        next: "Sonraki",
        previous: "Önceki",
        play: "Çal",
        pause: "Duraklat",
        playNext: "Sonraki parçayı çal",
        playPrevious: "Önceki parçayı çal",
        playRepeat: "Tekrarla",
        playRepeatOne: "Bir kez tekrarla",
      };
    default:
      return {
        playback: "Playback",
        shuffle: "Shuffle",
        next: "Next",
        previous: "Previous",
        play: "Play",
        pause: "Pause",
        playNext: "Play Next Track",
        playPrevious: "Play Previous Track",
        playRepeat: "Repeat",
        playRepeatOne: "Repeat One",
      };
  }
};
