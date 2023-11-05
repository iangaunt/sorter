// Stylesheet
import "../css/style.css";

// Attaches the Sorter component to the webpage.
import { createRoot } from "react-dom/client";
import Sorter from "./components/Sorter";
createRoot(document.getElementById("main")).render(Sorter());

// Reads the items.json file and scrapes albums and images.
import itemsJSON from "../data/items.json";


/**
 * Adds the proper properties of song to the sorter elements.
 * 
 * @param img - The `img` element to add the image to.
 * @param txt - The `h1` element to add the title to.
 * @param song - The song that will be added to the sorter.
 * @param map - The map to search for the key.
 */
function addSong(img: HTMLImageElement, txt: HTMLElement, item: string, cover: string) {
    img.src = cover;
    txt.innerHTML = item;
}

window.onload = function() {
    // Preload the items and map of items -> images for sorting.
    let items = new Array<string>();
    let imgMap = new Map<string, string>();

    for (let album in itemsJSON.groups) {
        let a = itemsJSON.groups[album];
        a.songs.forEach(function(s: string) {
            items.push(s);
            imgMap.set(s, a.img);
        });
    }
    
    // Initialize variables to store the sorter elements. Prevents lag from repeated access.
    let left_img: HTMLImageElement = document.getElementById("left-img") as HTMLImageElement;
    let left_txt = document.getElementById("left-txt");

    let right_img: HTMLImageElement = document.getElementById("right-img") as HTMLImageElement;
    let right_txt = document.getElementById("right-txt");
}

