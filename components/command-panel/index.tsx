import CommandPalette from 'react-command-palette';
import data from "../../data/posts-metadata.json"
import { commandbarStatusAtom } from '../../lib/state';
import { useHasMounted } from '../../lib/hooks';
import { useAtom } from 'jotai'

const commands = [{
    name: "Foo",
    command() { }
}, {
    name: "Bar",
    command() { }
}
 ];


 export function Commander(){
     const [isOpen, setIsOpen] = useAtom(commandbarStatusAtom)
     const isMounted = useHasMounted()
     const theme = {
         //modal: "my-modal",
         //overlay: "my-overlay",
         //container: "my-container",
         //header: "my-header",
         //content: "my-content",
         //input: "my-input",
}
    if (isMounted){

        return <CommandPalette
        commands={commands}
        placeholder="Try typing '?st', '>st' or 'st'"
        defaultInputValue=">"
        //theme={theme}
        className="cbs"
        filterSearchQuery={inputValue => {
            // strip action keys "? or >" from input before searching commands, ex:
            // "?something" or ">something" should search using "something" as the query
            return inputValue.replace(/^(>|\?)/g, '');
        }}
        open={isOpen}
        />
    }
    return <div></div>
 }
