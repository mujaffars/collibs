<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>

<script src="index.js"></script>

<link rel="stylesheet" href="style.css">
<script>


</script>

<?php
for ($i = 1; $i < 21; $i++) {
    for ($j = 1; $j < 49; $j++) {
        ?>
        <img id="image_<?php echo $i . "_" . $j; ?>" src="split/image_<?php echo $i . "_" . $j; ?>.png"/>
        <?php
    }
    echo '<br/>';
}
?>

<div class="picMainDiv">
    <?php for ($i = 1; $i < 21; $i++) { ?>
        <div class="picMainDiv picRow">
            <?php for ($j = 1; $j < 49; $j++) { ?>
                <div id="coldv_<?php echo $i . "_" . $j; ?>" class="colDiv"></div>
            <?php } ?>
        </div>
    <?php } ?>
</div>

<div>
    <div class="colshadediv cshade1"></div>
    <div class="colshadediv cshade2"></div>
</div>