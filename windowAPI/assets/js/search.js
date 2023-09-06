export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`


    function findIds(children) {
      for(let i = 0; i < children.length; i++) {
        if(children[i].id === id) {
          return children[i];
        }
        if(children[i].children.length > 0) {
            const result = findIds(children[i].children)
            if(result) {
              return result;
            }
          }
      }
    }


    // Your code here
    return findIds(document.body.children)
    return document.getElementById(id);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    function findTags(children) {
        for(let i = 0; i < children.length; i++) {
            if(children[i].nodeName === tag.toUpperCase()) {
              return children[i];
            }
            if(children[i].children.length > 0) {
              const result = findTags(children[i].children)
              if(result) {
                return result;
              }
            }
        }
    }

    return findTags(document.body.children)

    return  document.querySelector(tag);


}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    function findClass(children) {
        for(let i = 0; i < children.length; i++) {
            if(children[i].classList.contains(cls)) {
              return children[i];
            }
            if(children[i].children.length > 0) {
              const result = findClass(children[i].children)
              if(result) {
                return result;
              }
            }
        }
    }

    return findClass(document.body.children)
    // Your code here
    return document.querySelector(`.${cls}`);
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    const arrTags = []

    function findTags(children) {
        for(let i = 0; i < children.length; i++) {
            if(children[i].nodeName === tag.toUpperCase()) {
              arrTags.push(children[i]);
            }
            if(children[i].children.length > 0) {
              const result = findTags(children[i].children)
              if(result) {
                return result;
              }
            }
        }
    }

    findTags(document.body.children)

    return arrTags;

    return document.getElementsByTagName(tag);
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    const classArr = [];
    function findClass(children) {
        for(let i = 0; i < children.length; i++) {
            if(children[i].classList.contains(cls)) {
                classArr.push(children[i]);
            }
            if(children[i].children.length > 0) {
              const result = findClass(children[i].children)
              if(result) {
                return result;
              }
            }
        }
    }

    findClass(document.body.children)
    return classArr;

    return document.getElementsByClassName(cls);
}
