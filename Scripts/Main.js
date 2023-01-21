document.querySelectorAll("a").forEach(link =>
{
    if (link.href.includes("wikipedia.org/"))
    {
        if (link.href.includes("useskin=vector"))
        {
            link.href = link.href;
        }
        else
        {
            if (link.href.includes("?"))
            {
                link.href = link.href + "&" + 'useskin=vector';
            }
            else if (link.href.includes("#"))
            {
                let splitURL = link.href.split('#', 2);
                link.href = splitURL[0] + '?useskin=vector' + splitURL[1];
            }
            else
            {
                link.href = link.href + "?" + 'useskin=vector';
            }
        }
    }
    else
    {
        link.href = link.href;
    }
});