import getDate from "@/methods/getdate";

const Iframe = ({ noteBody, $updatedAt }) => {

  const embeddedHtml = `
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <link rel="stylesheet" type="text/css" id="mce-u0" crossorigin="anonymous" referrerpolicy="origin" href="https://cdn.tiny.cloud/1/gcmaowqs1w2pczgsd6ge4ey7gi95505swnagu4r4op0exhoc/tinymce/6.8.2-45/skins/ui/oxide/content.min.css">
      <link rel="stylesheet" type="text/css" id="mce-u1" crossorigin="anonymous" referrerpolicy="origin" href="https://cdn.tiny.cloud/1/gcmaowqs1w2pczgsd6ge4ey7gi95505swnagu4r4op0exhoc/tinymce/6.8.2-45/skins/content/default/content.min.css">
      <style type="text/css">
        body { font-family:Helvetica,Arial,sans-serif; font-size:14px,}
        footer {     text-align: right;
          padding-top: 10px;
          border-top: 1px solid #ccc;
          font-size: 12px;}
      </style>
    </head>
    <body id="tinymce" class="mce-content-body " data-id="tiny-react_92774813891706629904418" spellcheck="false" data-new-gr-c-s-check-loaded="14.1052.0">
    ${noteBody}
    <footer>${getDate($updatedAt).fullDate}</footer>
    </body>
  </html>
  `;

  return (
    <iframe
      title="Embedded iframe"
      srcDoc={embeddedHtml}
      allowFullScreen
      className="h-full w-full"
    ></iframe>
  );
};

export default Iframe;
