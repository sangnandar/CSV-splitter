function csvSplitter()
{
  // use parent + child combination to target the folder easier
  const parentFolder = 'CSV splitter';
  const childFolder = 'csv';
  const filename = 'test.csv';

  const folder = DriveApp
    .getFoldersByName(parentFolder).next()
    .getFoldersByName(childFolder).next();
  const file = folder
    .getFilesByName(filename).next();

  const fileContent = file.getBlob().getDataAsString();
  const newlineCharacter = detectNewlineCharacter(fileContent);
  const rows = fileContent.split(newlineCharacter);

  Logger.log(`Total rows: ${rows.length}`);

  // in case the CSV ended with new line character
  if (rows[rows.length - 1] === '') rows.pop();

  // remove header row
  const header = rows.splice(0, 1);

  const chunkSize = 100;
  let chunkIndex = 1;
  const newFilename = filename.substring(0, filename.lastIndexOf('.')); // without extension
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    chunk.unshift(header);
    folder.createFile(
      newFilename + '_chunk_' + chunkIndex + '.csv', 
      chunk.join(newlineCharacter)
    );
    chunkIndex++;
  }

  Logger.log(`Number of chunks: ${chunkIndex}`)

}