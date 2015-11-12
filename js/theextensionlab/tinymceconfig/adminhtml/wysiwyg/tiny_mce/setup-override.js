if(window.tinyMceWysiwygSetup)
{
    tinyMceWysiwygSetup.prototype.originalGetSettings = tinyMceWysiwygSetup.prototype.getSettings;
    tinyMceWysiwygSetup.prototype.getSettings = function(mode)
    {

        var settings = this.originalGetSettings(mode);

        settings.valid_children = "+ul[img]";
        settings.forced_root_block = false;

        return settings;
    }
}