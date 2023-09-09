import { AfterViewInit, Directive, ElementRef, SecurityContext } from '@angular/core';
import { allPokemonTypes } from '../constants/all-pokemon-types.const';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
    selector: '[appTypeHighlight]'
})
export class TypeHighlightDirective implements AfterViewInit {
    constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

    ngAfterViewInit() {
        const html = this.el.nativeElement.innerHTML;
        this.highlightMatchingText(html);
    }

    private highlightMatchingText(html: string) {
        let htmlAppend = html;

        for (const pokemonType of allPokemonTypes) {
            const pokemonTypeNameRegex = new RegExp(`${pokemonType.name}`, 'gi');
            const htmlWithHighlightedTypes = htmlAppend.replace(
                pokemonTypeNameRegex,
                `<span style='color:${pokemonType.color}; text-decoration:underline'>${pokemonType.name}</span>`
            );
            htmlAppend = htmlWithHighlightedTypes;
        }

        // const sanitizedHtml = this.sanitizer.sanitize(SecurityContext.HTML, htmlAppend);
        this.el.nativeElement.innerHTML = htmlAppend;
    }
}

