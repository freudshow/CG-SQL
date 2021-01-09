/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "linetest.h"

#pragma clang diagnostic ignored "-Wbitwise-op-parentheses"
#pragma clang diagnostic ignored "-Wshift-op-parentheses"
#pragma clang diagnostic ignored "-Wlogical-not-parentheses"
#pragma clang diagnostic ignored "-Wliteral-conversion"
cql_string_literal(_literal_1_exp_dump, "exp");
cql_string_literal(_literal_2_act_dump, "act");


//
// This file is auto-generated by linetest.sql, it is checked in just
// in case CQL is broken by a change.  The Last Known Good Verifier
// can be used to verify the tests pass again, or report failures
// while things are still otherwise broken.  Rebuild with 'regen.sh'
//


// Generated from linetest.sql:37

/*
CREATE PROC linetest_setup ()
BEGIN
  CREATE TABLE linedata(
    source TEXT NOT NULL,
    procname TEXT NOT NULL,
    line INTEGER NOT NULL,
    data TEXT NOT NULL,
    physical_line INTEGER NOT NULL
  );
  CREATE TABLE procs(
    procname TEXT NOT NULL PRIMARY KEY
  );
  CREATE INDEX __idx__test_lines ON linedata (source, procname);
END;
*/

#define _PROC_ "linetest_setup"
CQL_WARN_UNUSED cql_code linetest_setup(sqlite3 *_Nonnull _db_) {
  cql_code _rc_ = SQLITE_OK;
  _rc_ = cql_exec(_db_,
    "CREATE TABLE linedata( "
      "source TEXT NOT NULL, "
      "procname TEXT NOT NULL, "
      "line INTEGER NOT NULL, "
      "data TEXT NOT NULL, "
      "physical_line INTEGER NOT NULL "
    ")");
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  _rc_ = cql_exec(_db_,
    "CREATE TABLE procs( "
      "procname TEXT NOT NULL PRIMARY KEY "
    ")");
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  _rc_ = cql_exec(_db_,
    "CREATE INDEX __idx__test_lines ON linedata (source, procname)");
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  _rc_ = SQLITE_OK;

cql_cleanup:
  return _rc_;
}
#undef _PROC_

// Generated from linetest.sql:44

/*
CREATE PROC linetest_add (source_ TEXT NOT NULL, procname_ TEXT NOT NULL, line_ INTEGER NOT NULL, data_ TEXT NOT NULL, physical_line_ INTEGER NOT NULL)
BEGIN
  INSERT INTO linedata(source, procname, line, data, physical_line) VALUES(source_, procname_, line_, data_, physical_line_);
  INSERT OR IGNORE INTO procs(procname) VALUES(procname_);
END;
*/

#define _PROC_ "linetest_add"
CQL_WARN_UNUSED cql_code linetest_add(sqlite3 *_Nonnull _db_, cql_string_ref _Nonnull source_, cql_string_ref _Nonnull procname_, cql_int32 line_, cql_string_ref _Nonnull data_, cql_int32 physical_line_) {
  cql_code _rc_ = SQLITE_OK;
  sqlite3_stmt *_temp_stmt = NULL;

  _rc_ = cql_prepare(_db_, &_temp_stmt,
    "INSERT INTO linedata(source, procname, line, data, physical_line) VALUES(?, ?, ?, ?, ?)");
  cql_multibind(&_rc_, _db_, &_temp_stmt, 5,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, source_,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, procname_,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, line_,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, data_,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, physical_line_);
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  _rc_ = sqlite3_step(_temp_stmt);
  if (_rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
  cql_finalize_stmt(&_temp_stmt);
  _rc_ = cql_prepare(_db_, &_temp_stmt,
    "INSERT OR IGNORE INTO procs(procname) VALUES(?)");
  cql_multibind(&_rc_, _db_, &_temp_stmt, 1,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, procname_);
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  _rc_ = sqlite3_step(_temp_stmt);
  if (_rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
  cql_finalize_stmt(&_temp_stmt);
  _rc_ = SQLITE_OK;

cql_cleanup:
  cql_finalize_stmt(&_temp_stmt);
  return _rc_;
}
#undef _PROC_

// Generated from linetest.sql:53

/*
CREATE PROC linetest_dump ()
BEGIN
  DECLARE C CURSOR FOR SELECT *
    FROM linedata;
  LOOP FETCH C
  BEGIN
    CALL printf("%s %s %4d %3d %s\n", C.source, C.procname, C.physical_line, C.line, C.data);
  END;
END;
*/

#define _PROC_ "linetest_dump"

typedef struct linetest_dump_C_row {
  cql_bool _has_row_;
  cql_uint16 _refs_count_;
  cql_uint16 _refs_offset_;
  cql_int32 line;
  cql_int32 physical_line;
  cql_string_ref _Nonnull source;
  cql_string_ref _Nonnull procname;
  cql_string_ref _Nonnull data;
} linetest_dump_C_row;

#define linetest_dump_C_refs_offset cql_offsetof(linetest_dump_C_row, source) // count = 3
CQL_WARN_UNUSED cql_code linetest_dump(sqlite3 *_Nonnull _db_) {
  cql_code _rc_ = SQLITE_OK;
  sqlite3_stmt *C = NULL;
  linetest_dump_C_row C_ = { ._refs_count_ = 3, ._refs_offset_ = linetest_dump_C_refs_offset };

  _rc_ = cql_prepare(_db_, &C,
    "SELECT source, procname, line, data, physical_line "
      "FROM linedata");
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  for (;;) {
    _rc_ = sqlite3_step(C);
    C_._has_row_ = _rc_ == SQLITE_ROW;
    cql_multifetch(_rc_, C, 5,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &C_.source,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &C_.procname,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &C_.line,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &C_.data,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &C_.physical_line);
    if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
    if (!C_._has_row_) break;
    cql_alloc_cstr(_cstr_1, C_.source);
    cql_alloc_cstr(_cstr_2, C_.procname);
    cql_alloc_cstr(_cstr_3, C_.data);
    printf("%s %s %4d %3d %s\n", _cstr_1, _cstr_2, C_.physical_line, C_.line, _cstr_3);
    cql_free_cstr(_cstr_1, C_.source);
    cql_free_cstr(_cstr_2, C_.procname);
    cql_free_cstr(_cstr_3, C_.data);
  }
  _rc_ = SQLITE_OK;

cql_cleanup:
  cql_finalize_stmt(&C);
  cql_teardown_row(C_);
  return _rc_;
}
#undef _PROC_

// Generated from linetest.sql:62

/*
CREATE PROC dump_proc_records (source_ TEXT NOT NULL, procname_ TEXT NOT NULL)
BEGIN
  DECLARE C CURSOR FOR SELECT *
    FROM linedata
    WHERE procname = procname_ AND source = source_;
  LOOP FETCH C
  BEGIN
    CALL printf("%5d %s\n", C.line, C.data);
  END;
END;
*/

#define _PROC_ "dump_proc_records"

typedef struct dump_proc_records_C_row {
  cql_bool _has_row_;
  cql_uint16 _refs_count_;
  cql_uint16 _refs_offset_;
  cql_int32 line;
  cql_int32 physical_line;
  cql_string_ref _Nonnull source;
  cql_string_ref _Nonnull procname;
  cql_string_ref _Nonnull data;
} dump_proc_records_C_row;

#define dump_proc_records_C_refs_offset cql_offsetof(dump_proc_records_C_row, source) // count = 3
CQL_WARN_UNUSED cql_code dump_proc_records(sqlite3 *_Nonnull _db_, cql_string_ref _Nonnull source_, cql_string_ref _Nonnull procname_) {
  cql_code _rc_ = SQLITE_OK;
  sqlite3_stmt *C = NULL;
  dump_proc_records_C_row C_ = { ._refs_count_ = 3, ._refs_offset_ = dump_proc_records_C_refs_offset };

  _rc_ = cql_prepare(_db_, &C,
    "SELECT source, procname, line, data, physical_line "
      "FROM linedata "
      "WHERE procname = ? AND source = ?");
  cql_multibind(&_rc_, _db_, &C, 2,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, procname_,
                CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, source_);
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  for (;;) {
    _rc_ = sqlite3_step(C);
    C_._has_row_ = _rc_ == SQLITE_ROW;
    cql_multifetch(_rc_, C, 5,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &C_.source,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &C_.procname,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &C_.line,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &C_.data,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &C_.physical_line);
    if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
    if (!C_._has_row_) break;
    cql_alloc_cstr(_cstr_4, C_.data);
    printf("%5d %s\n", C_.line, _cstr_4);
    cql_free_cstr(_cstr_4, C_.data);
  }
  _rc_ = SQLITE_OK;

cql_cleanup:
  cql_finalize_stmt(&C);
  cql_teardown_row(C_);
  return _rc_;
}
#undef _PROC_

// Generated from linetest.sql:71

/*
CREATE PROC dump (procname TEXT NOT NULL)
BEGIN
  CALL printf("%s: difference encountered\n", procname);
  CALL printf("<<<< EXPECTED\n");
  CALL dump_proc_records("exp", procname);
  CALL printf(">>>> ACTUAL\n");
  CALL dump_proc_records("act", procname);
END;
*/

#define _PROC_ "dump"
CQL_WARN_UNUSED cql_code dump(sqlite3 *_Nonnull _db_, cql_string_ref _Nonnull procname) {
  cql_code _rc_ = SQLITE_OK;
  cql_alloc_cstr(_cstr_5, procname);
  printf("%s: difference encountered\n", _cstr_5);
  cql_free_cstr(_cstr_5, procname);
  printf("<<<< EXPECTED\n");
  _rc_ = dump_proc_records(_db_, _literal_1_exp_dump, procname);
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  printf(">>>> ACTUAL\n");
  _rc_ = dump_proc_records(_db_, _literal_2_act_dump, procname);
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  _rc_ = SQLITE_OK;

cql_cleanup:
  return _rc_;
}
#undef _PROC_

// Generated from linetest.sql:135

/*
CREATE PROC compare_lines (OUT procs INTEGER NOT NULL, OUT compares INTEGER NOT NULL, OUT errors INTEGER NOT NULL)
BEGIN
  SET compares := 0;
  SET errors := 0;
  SET procs := 0;
  DECLARE p CURSOR FOR SELECT *
    FROM procs;
  LOOP FETCH p
  BEGIN
    SET procs := procs + 1;
    DECLARE actual CURSOR FOR SELECT *
      FROM linedata
      WHERE source = 'act' AND procname = p.procname;
    DECLARE expected CURSOR FOR SELECT *
      FROM linedata
      WHERE source = 'exp' AND procname = p.procname;
    FETCH actual;
    FETCH expected;
    WHILE actual AND expected
    BEGIN
      SET compares := compares + 1;
      IF actual.line <> expected.line OR actual.data <> expected.data THEN
        CALL dump(p.procname);
        CALL printf("\nFirst difference:\n");
        CALL printf("expected: %5d %s\n", expected.line, expected.data);
        CALL printf("  actual: %5d %s\n", actual.line, actual.data);
        CALL printf("\nDifferences at:\n line %d in expected\n line %d in actual", expected.physical_line, actual.physical_line);
        CALL printf("\n");
        SET errors := errors + 1;
        LEAVE;
      END IF;
      FETCH actual;
      FETCH expected;
    END;
    IF actual <> expected THEN
      IF NOT actual THEN
        CALL dump(p.procname);
        CALL printf("\nRan out of lines in actual:\n");
        CALL printf("\nDifferences at:\n line %d in expected\n", expected.physical_line);
        CALL printf("\n");
        SET errors := errors + 1;
      END IF;
      IF NOT expected THEN
        CALL dump(p.procname);
        CALL printf("\nRan out of lines in expected:\n");
        CALL printf("\nDifferences at:\n line %d in actual\n", actual.physical_line);
        CALL printf("\n");
        SET errors := errors + 1;
      END IF;
    END IF;
  END;
END;
*/

#define _PROC_ "compare_lines"

typedef struct compare_lines_p_row {
  cql_bool _has_row_;
  cql_uint16 _refs_count_;
  cql_uint16 _refs_offset_;
  cql_string_ref _Nonnull procname;
} compare_lines_p_row;

#define compare_lines_p_refs_offset cql_offsetof(compare_lines_p_row, procname) // count = 1

typedef struct compare_lines_actual_row {
  cql_bool _has_row_;
  cql_uint16 _refs_count_;
  cql_uint16 _refs_offset_;
  cql_int32 line;
  cql_int32 physical_line;
  cql_string_ref _Nonnull source;
  cql_string_ref _Nonnull procname;
  cql_string_ref _Nonnull data;
} compare_lines_actual_row;

#define compare_lines_actual_refs_offset cql_offsetof(compare_lines_actual_row, source) // count = 3

typedef struct compare_lines_expected_row {
  cql_bool _has_row_;
  cql_uint16 _refs_count_;
  cql_uint16 _refs_offset_;
  cql_int32 line;
  cql_int32 physical_line;
  cql_string_ref _Nonnull source;
  cql_string_ref _Nonnull procname;
  cql_string_ref _Nonnull data;
} compare_lines_expected_row;

#define compare_lines_expected_refs_offset cql_offsetof(compare_lines_expected_row, source) // count = 3
CQL_WARN_UNUSED cql_code compare_lines(sqlite3 *_Nonnull _db_, cql_int32 *_Nonnull procs, cql_int32 *_Nonnull compares, cql_int32 *_Nonnull errors) {
  cql_code _rc_ = SQLITE_OK;
  sqlite3_stmt *p = NULL;
  compare_lines_p_row p_ = { ._refs_count_ = 1, ._refs_offset_ = compare_lines_p_refs_offset };
  sqlite3_stmt *actual = NULL;
  compare_lines_actual_row actual_ = { ._refs_count_ = 3, ._refs_offset_ = compare_lines_actual_refs_offset };
  sqlite3_stmt *expected = NULL;
  compare_lines_expected_row expected_ = { ._refs_count_ = 3, ._refs_offset_ = compare_lines_expected_refs_offset };

  *compares = 0;
  *errors = 0;
  *procs = 0;
  _rc_ = cql_prepare(_db_, &p,
    "SELECT procname "
      "FROM procs");
  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
  for (;;) {
    _rc_ = sqlite3_step(p);
    p_._has_row_ = _rc_ == SQLITE_ROW;
    cql_multifetch(_rc_, p, 1,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &p_.procname);
    if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
    if (!p_._has_row_) break;
    *procs = (*procs) + 1;
    _rc_ = cql_prepare(_db_, &actual,
      "SELECT source, procname, line, data, physical_line "
        "FROM linedata "
        "WHERE source = 'act' AND procname = ?");
    cql_multibind(&_rc_, _db_, &actual, 1,
                  CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, p_.procname);
    if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
    _rc_ = cql_prepare(_db_, &expected,
      "SELECT source, procname, line, data, physical_line "
        "FROM linedata "
        "WHERE source = 'exp' AND procname = ?");
    cql_multibind(&_rc_, _db_, &expected, 1,
                  CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, p_.procname);
    if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
    _rc_ = sqlite3_step(actual);
    actual_._has_row_ = _rc_ == SQLITE_ROW;
    cql_multifetch(_rc_, actual, 5,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &actual_.source,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &actual_.procname,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &actual_.line,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &actual_.data,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &actual_.physical_line);
    if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
    _rc_ = sqlite3_step(expected);
    expected_._has_row_ = _rc_ == SQLITE_ROW;
    cql_multifetch(_rc_, expected, 5,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &expected_.source,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &expected_.procname,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &expected_.line,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &expected_.data,
                   CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &expected_.physical_line);
    if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
    for (;;) {
    if (!(actual_._has_row_ && expected_._has_row_)) break;
      *compares = (*compares) + 1;
      if (actual_.line != expected_.line || cql_string_compare(actual_.data, expected_.data) != 0) {
        _rc_ = dump(_db_, p_.procname);
        if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
        printf("\nFirst difference:\n");
        cql_alloc_cstr(_cstr_6, expected_.data);
        printf("expected: %5d %s\n", expected_.line, _cstr_6);
        cql_free_cstr(_cstr_6, expected_.data);
        cql_alloc_cstr(_cstr_7, actual_.data);
        printf("  actual: %5d %s\n", actual_.line, _cstr_7);
        cql_free_cstr(_cstr_7, actual_.data);
        printf("\nDifferences at:\n line %d in expected\n line %d in actual", expected_.physical_line, actual_.physical_line);
        printf("\n");
        *errors = (*errors) + 1;
        break;
      }
      _rc_ = sqlite3_step(actual);
      actual_._has_row_ = _rc_ == SQLITE_ROW;
      cql_multifetch(_rc_, actual, 5,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &actual_.source,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &actual_.procname,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &actual_.line,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &actual_.data,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &actual_.physical_line);
      if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
      _rc_ = sqlite3_step(expected);
      expected_._has_row_ = _rc_ == SQLITE_ROW;
      cql_multifetch(_rc_, expected, 5,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &expected_.source,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &expected_.procname,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &expected_.line,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_STRING, &expected_.data,
                     CQL_DATA_TYPE_NOT_NULL | CQL_DATA_TYPE_INT32, &expected_.physical_line);
      if (_rc_ != SQLITE_ROW && _rc_ != SQLITE_DONE) { cql_error_trace(); goto cql_cleanup; }
    }
    if (actual_._has_row_ != expected_._has_row_) {
      if (! actual_._has_row_) {
        _rc_ = dump(_db_, p_.procname);
        if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
        printf("\nRan out of lines in actual:\n");
        printf("\nDifferences at:\n line %d in expected\n", expected_.physical_line);
        printf("\n");
        *errors = (*errors) + 1;
      }
      if (! expected_._has_row_) {
        _rc_ = dump(_db_, p_.procname);
        if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }
        printf("\nRan out of lines in expected:\n");
        printf("\nDifferences at:\n line %d in actual\n", actual_.physical_line);
        printf("\n");
        *errors = (*errors) + 1;
      }
    }
  }
  _rc_ = SQLITE_OK;

cql_cleanup:
  cql_finalize_stmt(&p);
  cql_teardown_row(p_);
  cql_finalize_stmt(&actual);
  cql_teardown_row(actual_);
  cql_finalize_stmt(&expected);
  cql_teardown_row(expected_);
  return _rc_;
}
#undef _PROC_