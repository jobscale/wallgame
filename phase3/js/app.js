/**
 * アプリDOMを生成して
 * フィールドDOMとスコアDOMを組み込みます。
 */
const $app = createDivWithId('app');
appendDomChildren($app, [$field, $score, $gameover]);

/**
 * bodyにアプリDOMを組み込みます。
 */
appendDomChild(document.body, $app);
