### OBS Multiview Tally System

## What is that??
You ever wanted the look and feel of a professional video mixer in OBS? With this tool you can replicate the multiview look of video hardware mixers with different sources, preview and programm. Scroll down to see what it looks like.

## What you need

- The [obs-websocket plugin](https://github.com/Palakis/obs-websocket) (!! Please note that currently you have to use a [build from appveyor](https://ci.appveyor.com/api/buildjobs/wl494vi2xxpymdk0/artifacts/obs-websocket-739bd6f.zip) until the next official stable version comes out !!)

- Optional: The [obs-ndi plugin](https://github.com/Palakis/obs-ndi/releases) so you don't have to use a screen capture for the main output

## OBS Websocket Setup

- Install the plugin [(Guide)](https://obsproject.com/forum/resources/obs-and-obs-studio-install-plugins-windows.421/)

- Open the "Tools" menu and select "websocket server settings"

- Make sure that "Enable Websocket server" is checked, "Server Port" is 4444 and "Enable authentification" is unchecked"


## Template Setup

- Switch OBS to Studio Mode

- [Download the repository](https://github.com/lebaston100/OBSmultiviewTally/archive/master.zip) or clone it

- Create a new scene in OBS and name it "Multiview" (or whatever you like)

- First, add a Browser source, select "local file" and choose the "client.html"

- Set "Width" to 1920, "Height" to 1080, "FPS" to your streaming framerate and replace the the content of the "CSS" box with `body {margin: 0px auto; overflow: hidden;}`

- Add your scenes or sources to the multiview scene which you want displayed.

- Open the "positions.md" with a text editor.

- Example for source 1:
    
    - Open the "Scene Item Transform" windows by right clicking your first source and selecting "Transform" followed by "Edit Transform"
    
    - Copy the X and Y potition from the "positions.md" to the first two boxes titled "Position"
    
    - Copy the "Width" and "Height" values to the two boxes titled "Size"
    
    - Click "Close"

- Repeat this steps for all of the sources

- Right click the "Multiview" scene name and select "Fullscreen Projector (Scene)"
 
- Choose the display you want to see the multiview on


## Templace Configuration

You have to configure the template to accept your scene names

- Open with "client.js" in the js subfolder with a text editor.

- In the first line you can see a list with the different scene names

- If your first scene is named "Intro", change "src 1" to "Intro" (!!case sensitive!!)

- Repeat this for all the other scenes

### Template 1 Layout

![Image](http://cdn.lebaston100.de/git/obsmultiviewtallypreview1.png)

### Other Stuff

- Pull requests with new layouts are welcome
- Let me know how you use it ;D