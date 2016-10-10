@echo off
del build\bundle.css
for /r "source\" %%F in (*.css) do type "%%F" >>build\bundle.css