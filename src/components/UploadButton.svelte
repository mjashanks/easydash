<script>
import store from "../store"
import UploadIcon from "../icons/UploadIcon.svelte"

let files
$: if (files && files[0]) store.setDataFile(files[0])

</script>

<button>
  <label for="file-uploader">
    <UploadIcon size="32"/><span>Import Data</span>
  </label>
</button>
<input type="file" bind:files id="file-uploader">


<style>

button {
  padding: 0px;
}

label {
  padding: 7px 5px;
  vertical-align: middle;
}

#file-uploader {
  vertical-align: middle;
  visibility: hidden;
}

span {
  margin-left: 7px;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

</style>