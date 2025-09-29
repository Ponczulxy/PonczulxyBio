/**
 * config.js
 * Plik z danymi konfiguracyjnymi strony "O Mnie"
 */

const CONFIG = {
    // --- OGÓLNE ---
    NAME: "Ponczulxy", // Wypełnij, ziom!
    
    // --- NAGŁÓWEK HERO ---
    HERO: {
        // Nowy, bardziej chwytliwy i naturalny tytuł
        HEADING: "Witam cię serdecznie!", 
        SUBTITLE: "Jestem gościem, który łączy twardą logikę programowania z czystym, estetycznym designem. Lubię, jak rzeczy działają i wyglądają.INFORMACJA: Strona jest w budowie,Nie jest ona najlepsza, ale będę ją stale ulepszać",
    },
    
    // --- KONTAKT I MEDIA (Zachowane) ---
    DISCORD: {
        TAG: "ponczulxy",
        INVITE_URL: "https://discord.gg/HgKD5BmN"
    },
    YOUTUBE_LINK: "https://youtube.com/TWOJLIKDOYT",
    
    // --- SEKCJA KREATYWNY CHAOS (O MNIE) ---
    ABOUT_ME: [
        "Siemanko! Jestem typem, który zawsze szuka balansu. Z jednej strony uwielbiam precyzję, jaką daje kodowanie, z drugiej — totalnie jaram się tworzeniem rzeczy, które po prostu **wyglądają dobrze**. Robię, żeby było **płynnie, szybko i z dobrym vibe'm**.",
        "Kluczem do każdego mojego projektu jest uporządkowany chaos**. Wiem, że to brzmi dziwnie, ale w chaosie zawsze szukam idealnej ścieżki. Ta strona to moja wizytówka: zero zbędnego spamu, tylko **konkret i flow**. Zawsze jest coś do **podkręcenia**."
    ],

    // --- SEKCJA JĘZYKI I NARZĘDZIA (Kafelki) ---
    SKILLS: [
        { name: "HTML/CSS", icon: 'fab fa-css3-alt', color: 'color-css', description: 'Mój plac zabaw dla wizualnych smaczków. **Flexbox i Grid** to podstawa!' },
        { name: "JavaScript", icon: 'fab fa-js-square', color: 'color-js', description: 'Wszystko co dynamiczne i interaktywne. Jak te animacje, które tu śmigają.' },
        { name: "Java", icon: 'fab fa-java', color: 'color-java', description: 'Serwerowa robota i ciężka logika. Głównie Minecraft Pluginy (tak, bawię się w to, haha).' },
        { name: "Python", icon: 'fab fa-python', color: 'color-python', description: 'Automatyzacja, szybkie skrypty i ogarnianie nudnych procesów. Idealny do **czyszczenia danych**.' },
    ],

    // --- NOWA SEKCJA: GAMING ---
    GAMING_CONTENT: [
        "Gaming to dla mnie czysty **relaks, ale z nutką strategii**. Nie gram dla casualowego klikania, tylko dla **masterowania systemu**. Uwielbiam te gry, gdzie musisz myśleć kilka kroków do przodu i optymalizować każdy element. To mi pomaga w kodzie, serio.",
        "Mój focus to **strategie, symulatory i złożone RPG**. Kocham, kiedy mogę coś **zbudować, ulepszyć i zobaczyć, jak mój plan działa perfekcyjnie**. Nieważne, czy to rozbudowa bazy, czy skomplikowana kompozycja w LOL-u. "
    ],
    
    // --- SEKCJA KODU (Bardziej chillowy komentarz) ---
    CODE_SNIPPET: `
package Core; 

import org.bukkit.plugin.java.JavaPlugin;

// Główna Klasa Pluginu - SiemaPlug
public class <b>SiemaPlug</b> extends JavaPlugin {

    private static <i>SiemaPlug</i> instance; // Statyczna instancja, standard

    @Override
    public void onEnable() {
        instance = this;
        getLogger().info("=======================================");
        getLogger().info("   Siema Mordo, Plugin Startuje!");
        getLogger().info("   Status: Online i gotowy do chillu");
        getLogger().info("=======================================");
        
    }

    @Override
    public void onDisable() {
        getLogger().info("=======================================");
        getLogger().info("   Plugin Off! Trzymaj się, Nara!");
        getLogger().info("=======================================");
    }

    public static SiemaPlug getInstance() {
        return instance;
    }
}
`,
    
};