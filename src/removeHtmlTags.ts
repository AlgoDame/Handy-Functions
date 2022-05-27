function removeTags(html: string) {
    let text = html.replace(/<[^>]*>/g, '');
    return text;
    // Test with this variable =>> 
    //let content = "<div><div dir=\"ltr\">May 27 email 1</div>\r\n</div>"
}