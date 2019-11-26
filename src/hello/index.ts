import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngxSemanticVersion(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name } = _options;
    tree.overwrite('hello.js', `console.log('hello ${name.join(', ')}!');`);
    return tree;
  };
}
