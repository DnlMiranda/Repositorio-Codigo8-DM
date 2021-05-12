#POSICIONAMIENTO EN CSS

## `position: relative;`

- Puedo mover al elemento con 2 ejes  de referencia :
    - top: cantidad de pixeles desde el extremo superior 
    - left: cantidad de pixeles desde el extremo izquierdo
- Si el elemento es movido, su espacio original se respeta por los demás elementos

- Un elemento también puede tener `position: relative` cuando tiene hijos con `position:absolute`, de tal forma que, dichos hijos, no se salgan del área del padre


## `position: absolute`

- El elemento sale del contexto de los demás elementos
(tiene el efecto de flotar sobre los demás elementos)

- Los elementos que NO tienene -position:absolute- 
OCUPAN EL ESPACIO de éste elemento

- Puedo mover al elemento con 4 ejes de referencia:
    -top, left, right bottom

- Obligatoriamente, debemos especificar, al menos 2 ejes de ref.

- El elemento `absolute` se mueve con referencia al PROXIMO PADRE DIRECTO que tenga `position:relative` ; 

- De NO cumplirse al anterior punto, el padre de referencia, seria el elemento HTML

- *OJO* Nos sirve mas para CARDS,etc MENOS PARA BOTONES FLOTANTES *

## `position: fixed`

- El elemento es posicionado a

- Sale del contexto de los demas elementos!s