class CreateFolderStructure{
  constructor(folderName, rootFolder, ids, ownerId, ownerName, flag = 'folder'){
    this.folderName = folderName;
    this.rootFolder = rootFolder;
    this.ids = ids;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.flag = flag
  }
}

export default CreateFolderStructure;