

import React, { RefObject } from 'react';

const handleDrag = (e: React.DragEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    console.log('Dragging', e.pageX);
    console.log(documentRef)
};
const handleDragStart = (e: React.DragEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    console.log('Drag started', e.pageX);
    console.log(documentRef)
};
const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    console.log('Drag ended', e.pageX);
};
const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    console.log(e);
    console.log('Mouse down', e.pageX);
    console.log(documentRef)
};

const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    console.log('Mouse up', e.pageX);
    console.log(documentRef)
};


export const createEventHandlers = (documentRef: RefObject<HTMLDivElement>) => ({
    onDrag: (e: React.DragEvent<HTMLDivElement>) => handleDrag(e, documentRef),
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, documentRef),
    onDragEnd: (e: React.DragEvent<HTMLDivElement>) => handleDragEnd(e, documentRef),
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => handleMouseDown(e, documentRef),
    onMouseUp: (e: React.MouseEvent<HTMLDivElement>) => handleMouseUp(e, documentRef),
});





// const eventHandlers = {
//     onDrag: handleDrag,
//     onDragStart: (e: React.DragEvent<HTMLDivElement>) => console.log('Drag started', e.pageX),
//     onDragEnd: (e: React.DragEvent<HTMLDivElement>) => console.log('Drag ended', e.pageX),
//     onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => console.log('Mouse down', e.pageX),
//     onMouseUp: (e: React.MouseEvent<HTMLDivElement>) => console.log('Mouse up', e.pageX),
// };