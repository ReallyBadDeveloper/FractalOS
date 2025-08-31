# Installing
## Prerequisites
FractalOS requires the following to run:
- Web browser (ideally the latest version of [Google Chrome](https://www.google.com/chrome))
    > **Why Chrome?**\
    > FractalOS is designed with Chromebooks in mind, which usually only use Google Chrome. Some parts of FractalOS might not be compatible with other browsers.
- Latest version of [Lagoon Booter](https://github.com/minidogg/lagoon-boot)
    > **What is Lagoon Booter?**\
    > Lagoon Booter is a program that allows you to dynamically load a psuedo operating system (like FractalOS) and acts like a high-level kernel. It also adds file system access, meaning that operating systems running under it can modify certain folders without having to utilize APIs like `localStorage` or `indexedDB`.

You can download these dependencies at their respective links.
## Without Webserver (Local File)
1. ~~Download the latest release of FractalOS.~~\
FractalOS currently has no releases. Instead, download it by [going to the repository root](https://github.com/ReallyBadDeveloper/FractalOS) and clicking `Code` > `Download ZIP`.
2. Unzip the archive to your preferred location.
    > **Note**: Put the contents of the archive in a new folder. Do not put the contents in an already used folder.
3. To run, open Lagoon Booter in Google Chrome, click `Start`, and then select the folder containing your copy of FractalOS.
## With Webserver (Custom Website)
Support for custom websites is currently not in active development. Feel free to fork both [FractalOS](https://github.com/ReallyBadDeveloper/FractalOS/fork) and [Lagoon Booter](https://github.com/minidogg/lagoon-boot/fork) if you would like to help.