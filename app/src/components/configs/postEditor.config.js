export default {
    selector: '#post-editor',
    file_picker_types: 'image',
    contextmenu: false,
    plugins: "advlist autolink autosave link image lists hr pagebreak searchreplace media table paste autoresize emoticons textpattern toc",
    toolbar1: "bold italic underline strikethrough publiilink unlink emoticons blockquote alignleft aligncenter alignright bullist numlist image gallery media table toc",
    toolbar2: "styleselect formatselect searchreplace hr readmore undo redo restoredraft removeformat sourcecode",
    toolbar3: "",
    block_formats: 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Address=address;Pre=pre;Code=code;Blockquote=blockquote',
    extended_valid_elements: "a[*],altGlyph[*],altGlyphDef[*],altGlyphItem[*],animate[*],animateColor[*],animateMotion[*],animateTransform[*],circle[*],clipPath[*],color-profile[*],cursor[*],defs[*],desc[*],discard[*],ellipse[*],feBlend[*],feColorMatrix[*],feComponentTransfer[*],feComposite[*],feConvolveMatrix[*],feDiffuseLighting[*],feDisplacementMap[*],feDistantLight[*],feDropShadow[*],feFlood[*],feFuncA[*],feFuncB[*],feFuncG[*],feFuncR[*],feGaussianBlur[*],feImage[*],feMerge[*],feMergeNode[*],feMorphology[*],feOffset[*],fePointLight[*],feSpecularLighting[*],feSpotLight[*],feTile[*],feTurbulence[*],filter[*],font[*],font-face[*],font-face-format[*],font-face-name[*],font-face-src[*],font-face-uri[*],foreignObject[*],g[*],glyph[*],glyphRef[*],hatch[*],hatchpath[*],hkern[*],iframe[*],image[*],line[*],linearGradient[*],marker[*],mask[*],mesh[*],meshgradient[*],meshpatch[*],meshrow[*],metadata[*],missing-glyph[*],mpath[*],path[*],pattern[*],polygon[*],polyline[*],radialGradient[*],rect[*],set[*],solidcolor[*],stop[*],style[*],svg[*],switch[*],symbol[*],text[*],textPath[*],title[*],tref[*],tspan[*],unknown[*],use[*],view[*],vkern[*],publii-amp,publii-non-amp,script[*],i[*],video[*],audio[*],source[*],stream[*]",
    formats: {
        alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-left' },
        aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-center' },
        alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-right' },
        alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-justify' }
    },
    preview_styles: false,
    resize: false,
    menubar: false,
    forced_root_block : "",
    force_br_newlines : false,
    force_p_newlines : true,
    paste_as_text: false,
    keep_styles: false,
    image_class_list: [
        {title: 'None', value: 'post__image'},
        {title: 'Full image', value: 'post__image post__image--full'},
        {title: 'Wide image', value: 'post__image post__image--wide'},
        {title: 'Left-aligned image', value: 'post__image post__image--left'},
        {title: 'Right-aligned image', value: 'post__image post__image--right'},
        {title: 'Centered image', value: 'post__image post__image--center'}
    ],
    element_format : 'html',
    fix_list_elements : true,
    image_caption: true,
    autosave_ask_before_unload: false,
    autosave_interval: "10s",
    autosave_restore_when_empty: false,
    autosave_retention: "30m",
    entity_encoding: "raw",
    allow_script_urls: true,
    textpattern_patterns: [
        {start: '*', end: '*', format: 'italic'},
        {start: '**', end: '**', format: 'bold'},
        {start: '##', format: 'h2'},
        {start: '###', format: 'h3'},
        {start: '####', format: 'h4'},
        {start: '#####', format: 'h5'},
        {start: '######', format: 'h6'},
        {start: '1. ', cmd: 'InsertOrderedList'},
        {start: '* ', cmd: 'InsertUnorderedList'},
        {start: '- ', cmd: 'InsertUnorderedList'}
   ],
   toc_depth: 6,
   toc_header: "h3",
   toc_class: "post__toc",
   rel_list: [
    {title: 'noreferrer', value: 'noreferrer'},
    {title: 'nofollow', value: 'nofollow'},
    {title: 'noopener', value: 'noopener'},
    {title: 'sponsored', value: 'sponsored'},
    {title: 'ugc', value: 'ugc'},
   ],
   link_context_toolbar: false,
   link_quicklink: false
};
